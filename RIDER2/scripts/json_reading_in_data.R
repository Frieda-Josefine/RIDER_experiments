
'
    Script: "Reading in .json files for the RIDER 3 retrocue study"
    Author: Frieda Born
    Contact: born [at] mpib-berling.mpg.de
    
    Input: raw data for second version of the task without continous ori test in WM task
    Output: dataframme(s) to perform statistics and plotting
'

# Environment preparation -------------------------------------------------
source("utilities.R")

#specific for this script
library(jsonlite)

json_files <- list.files("/Users/born/Downloads/results (7)", pattern = ".json", full.names = TRUE)


# Initialize an empty list to store dataframes
dataframe_list <- list()

for (json_file in json_files) {
  # Read the JSON file into a dataframe
  json_data <- fromJSON(json_file)
  
  # Check if json_data is a data frame
  if (is.data.frame(json_data)) {
    # Extract the subject identifier (replace "subject_id" with the actual field name)
    subject_id <- json_data$date  # Replace "subject_id" with the actual field name
    
    # Add the subject identifier to the dataframe
    json_data$subject_id <- subject_id
    
    # Extract the file name without the extension as an identifier to have the file names (basically dates) in the df as well
    file_identifier <- tools::file_path_sans_ext(basename(json_file))
    
    # Add the file identifier as a new column
    json_data$file_identifier <- file_identifier
    
    # Append the data to the list of dataframes
    dataframe_list <- append(dataframe_list, list(json_data))
  } else {
    # Handle cases where the JSON data cannot be converted to a data frame
    cat("Skipping file:", json_file, "because it does not contain valid data.\n")
  }
}

# Combine all valid dataframes in the list using rbind.fill
if (length(dataframe_list) > 0) {
  combined_data <- do.call(rbind.fill, dataframe_list)
} else {
  cat("No valid JSON data files found.\n")
}

# because the script was previously written for the "data" variable, I assign the name here
data <- combined_data

# This participant is excluded, because he/she did the experiment twice. 
data<-data[!(data$participant=="541"),]

# This participant is excluded, because he/she had severe technical issues throughout the task (objects did not stop rotating). 
data<-data[!(data$participant=="492"),]

# This participant failed the attention checks
data<-data[!(data$participant=="599"),]

# used paper and pencil
data<-data[!(data$participant=="607"),]


#data$participant <- data %>% group_indices(date)

data$participant <- data$file_identifier

#data$date<- data %>% group_indices(date)
length(unique(data$participant))

data_selection <-  data %>%
  select(participant,trialNumber_WM,# trial identification
         image1, image2, test1,cue,#stimuli
         trial_type,#trial type (1-3)
         startOri1,startOri2,#orientation at presentation
         start_distance_t1,start_distance_ltm,#orientation at start of adjustment trial
         timeout,# > 15s to respond
         this_ori_t1,this_ori_ltm, #accuracies
         log_response_t1.rt,adjust_keys_LTM.rt,adjust_keys_t1.rt,log_response_t1.keys,adjust_keys_t1.keys,#reaction times
         ltm_image,# ltm_stimulus
         accuracy_ltm,ltm_trial,fixedOri_ltm,startOri_ltm,timeout_ltm,#specific LTM variables
         WM_condition_file#c_file used
  )

input_variables_WM <- c("participant","trial_type","image1","image2","test1","startOri1","startOri2","start_distance_t1", "this_ori_t1","log_response_t1.rt","trial_type","log_response_t1.keys","timeout","cue","adjust_keys_t1.keys","adjust_keys_t1.rt")
LTM_variables      <- c("ltm_trial","accuracy_ltm","ltm_image","ltm_trial","participant","adjust_keys_LTM.rt","start_distance_ltm","fixedOri_ltm","this_ori_ltm","startOri_ltm","timeout_ltm")
c_files <- c("WM_condition_file")

c_files <- data_selection[,c_files]
WM_input  <- data_selection[,input_variables_WM]
data_LTM  <- data_selection[,LTM_variables]


# approach that loops over each participants data 
extract_data_without_NA <- function(WM_input, data_LTM){
  new_data_WM <- list()
  new_data_LTM <- list()
  
  # Split the data frames by participant
  WM_input_split <- split(WM_input, WM_input$participant)
  data_LTM_split <- split(data_LTM, data_LTM$participant)
  
  # Loop over each participant's data frame separately
  for (participant in names(WM_input_split)) {
    # when there are timeouts for the participants it causes data of two trials to be logged in two rows, which is why I need to include rows where there are also 2 or 7 NAs present, in addition in the training trials not everything is logged, but I also want to extract the data here (hence, NA = 5 argument) 
    var_without_na_input <- WM_input_split[[participant]][rowSums(is.na(WM_input_split[[participant]])) == 0|rowSums(is.na(WM_input_split[[participant]])) == 2|rowSums(is.na(WM_input_split[[participant]])) == 5|rowSums(is.na(WM_input_split[[participant]])) == 7,]
    # The row sum NA argument for the LTM trials equal to 3 also results from the time out condition
    var_without_na_LTM <- data_LTM_split[[participant]][rowSums(is.na(data_LTM_split[[participant]])) == 0|rowSums(is.na(data_LTM_split[[participant]])) == 3,]
    
    # Check if the number of rows in input and output data frames are equal
    new_data_WM[[participant]] <- var_without_na_input
    new_data_LTM[[participant]] <- var_without_na_LTM
    
    # Print a message indicating that the data for this participant is consistent
    # Note, if you don't want this statement to be printed even when everything is correct, comment it out of this function.
    cat("Data for participant", participant, "is consistent.\n")
    
    # Print the number of trials for each type of task
    cat("Participant", participant, "has", nrow(var_without_na_input), "trials in the working memory task and", nrow(var_without_na_LTM), "trials in the long-term memory task.\n")
  }
  
  # Combine the results for all participants into one list of data frames
  list(
    WM = do.call(rbind, new_data_WM),
    LTM = do.call(rbind, new_data_LTM)
  )
}



cleaned_data <- extract_data_without_NA(WM_input,data_LTM)

WM_data <- cleaned_data[[1]]
WM_data$participant <- WM_data$participant
#WM_data[11] <- NULL # delete additional trial_type column
LTM_data <- cleaned_data[[2]]


check_consistency_ntrials <- function(data){
  full_data_ntrials <- nrow(data)/(length(unique(data$participant)))
  participant_ntrials <- data %>% group_by(participant) %>% count(participant)
  if (any(participant_ntrials$n != full_data_ntrials)){
    return(print(tbl_df(participant_ntrials), n=83))
  }
  else{
    return("Number of trials per participant is consistant across full dataset.")
  }
}


check_consistency_ntrials(WM_data)
check_consistency_ntrials(LTM_data)

# if we see slight inconsistencies here (e.g. 55 instead of 54 WM trials), a look in the data confirms that this is to time out rows, which will be filtered out in the analysis script
# Bigger inconsistencies result from the change in trial number that we performed during the data acqusition. WM trials where decreased for half the subjects from 62 to 56 and LTM from 112 to 96



# apparenty one column got converfted into a weird formal, so I identify it here
problematic_columns <- sapply(WM_data, function(x) !is.atomic(x))

# Print the names of problematic columns
names(WM_data)[problematic_columns]

# I then reformat the image1 column which was formated as list to a string, as is just contains one imnage name per row
WM_data$image1 <- sapply(WM_data$image1, toString)

write.csv(WM_data,"/Users/born/Documents/RIDER3/client/public/data/WM_data_RIDER_json4.csv", row.names = FALSE)
write.csv(LTM_data,"/Users/born/Documents/RIDER3/client/public/data/LTM_data_RIDER_json4.csv", row.names = FALSE)




