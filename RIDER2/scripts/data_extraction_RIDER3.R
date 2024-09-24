'
    Script: "Cleaning raw data files for the RIDER 3 retrocue study"
    Author: Frieda Born
    Contact: born [at] mpib-berling.mpg.de
    
    Input: raw data for second version of the task without continous ori test in WM task
    Output: dataframme(s) to perform statistics and plotting
'

# Environment preparation -------------------------------------------------
source("utilities.R")

# Import datasets (in this case import piloting results as example data sheet) --------------------------------------

data <- read.csv("/Users/born/Downloads/results - 2023-07-20T141837.679.csv",na.strings = c("", "NA"))

unique(data$date)

#last_dates <- tail(unique(data$date),)

# delete the data that has no data from this participant: "2023-04-17_09h35.13.394"
# find the index of the value to delete
#index_to_delete <- which(last_dates == "2023-04-17_09h35.13.394")

# remove the value using indexing
#last_dates <- last_dates[-index_to_delete]

#data <- data %>% filter(date == "2023-04-04_11h52.20.975" | date == "2023-04-04_18h01.38.998" | date == "2023-04-04_16h42.49.551"| date == "2023-04-04_02h49.42.835" | date == "2023-04-04_09h40.54.850" | date == "2023-04-04_10h46.46.987"| date == "2023-04-04_09h42.36.678"| date == "2023-04-04_09h41.40.683"| date == "2023-04-03_18h13.30.073"| date == "2023-04-03_12h12.00.085"| date == "2023-04-14_16h04.11.267"| date =="2023-04-14_18h07.39.461"| date =="2023-04-14_18h03.20.528"| date =="2023-04-14_16h51.06.706"| date =="2023-04-14_16h46.59.924"| date =="2023-04-17_09h52.06.163"| date =="2023-04-17_09h14.27.530"| date =="2023-04-17_09h08.01.106"| date =="2023-04-17_09h08.27.096"| date =="2023-04-17_02h53.49.961"| date == "2023-04-18_11h56.25.659")#| date == "2023-03-14_19h22.10.976"| date == "2023-03-31_14h56.58.966" | date == "2023-03-24_14h19.15.967" | date == "2023-03-23_11h57.49.927"| date == "2023-03-23_11h56.07.468" | date == "03/23/2023_11h41.00.284" | date == "2023-03-23_11h37.02.628"| date == "03/22/2023_12h33.16.022"| date == "2023-03-22_11h27.53.631"| date == "2023-03-22_09h29.51.884"| date == "2023-03-21_14h18.24.722"| date == "2023-03-15_15h13.28.242")

#data <- data %>% filter(date == "2023-03-31_14h56.58.966" | date == "2023-03-24_14h19.15.967" | date == "2023-03-23_11h57.49.927"| date == "2023-03-23_11h56.07.468" | date == "03/23/2023_11h41.00.284" | date == "2023-03-23_11h37.02.628"| date == "03/22/2023_12h33.16.022"| date == "2023-03-22_11h27.53.631"| date == "2023-03-22_09h29.51.884"| date == "2023-03-21_14h18.24.722"| date == "2023-03-15_15h13.28.242")
#data <- data %>% filter(date == "2023-04-07_12h04.02.849" | date == "2023-04-07_11h11.39.986" | date == "04/07/2023_10h58.56.293"| date == "04/07/2023_09h58.47.306" | date == "2023-04-07_10h54.14.363" | date == "2023-04-06_10h42.08.282")#| date == ""| date == ""| date == ""| date == ""| date == "")
#data <- data %>% filter(date == "2023-04-12_13h42.09.037"| date == )

#data <- data %>% filter(date %in% last_dates)

# This participant is excluded, because he/she did the experiment twice. 
data<-data[!(data$participant=="541"),]
# This participant is excluded, because he/she had severe technical issues throughout the task (objects dod not stop rotating). 
data<-data[!(data$participant=="492"),]

# This participant failed the attention checks
data<-data[!(data$participant=="599"),]

# used paper and pencil
data<-data[!(data$participant=="607"),]


data$participant <- data %>% group_indices(date)
data$date<- data %>% group_indices(date)


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




# new approach that loops over each participants data 
extract_data_without_NA <- function(WM_input, data_LTM){
  new_data_WM <- list()
  new_data_LTM <- list()
  
  # Split the data frames by participant
  WM_input_split <- split(WM_input, WM_input$participant)
  data_LTM_split <- split(data_LTM, data_LTM$participant)
  
  # Loop over each participant's data frame separately
  for (participant in names(WM_input_split)) {
    var_without_na_input <- WM_input_split[[participant]][rowSums(is.na(WM_input_split[[participant]])) == 0|rowSums(is.na(WM_input_split[[participant]])) == 2|rowSums(is.na(WM_input_split[[participant]])) == 5|rowSums(is.na(WM_input_split[[participant]])) == 7,]
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

# did not do the task
WM_data<-WM_data[!(WM_data$participant=="58"),]
LTM_data<-LTM_data[!(LTM_data$participant=="58"),]



write.csv(WM_data,"/Users/born/Documents/RIDER3/client/public/data/WM_data_RIDER_3.csv", row.names = FALSE)
write.csv(LTM_data,"/Users/born/Documents/RIDER3/client/public/data/LTM_data_RIDER_3.csv", row.names = FALSE)

