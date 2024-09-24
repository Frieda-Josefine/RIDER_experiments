

## In this script the demographic information downloaded from Prolific is matched with the participants included in
## RIDER 1-3

# prepare environment
#clean environment
rm(list = ls()) 
# Libraries
library(plyr) #Ssplitting, applying and combining Data
library(dplyr) # for general data manipulation
library(ggplot2) # for visualizations
library(purrr)#working with functions and vectors
library(stringr)#working with strings
library(purrr)# for plotting
library(tidyverse)#different aspects of data processing
library(reshape)# for general data manipulation
library(scico)#colour palettes fpr plotting
library("readxl")
library(circular)
library(Rmisc)
library(ggpubr)# for plotting
library(rstatix)#for stats
library(viridis)# for nice plotting colors
library(data.table)
library(BayesFactor)#for performing a Bayesian t-test
library(cowplot)#for plotting
library(ggstatsplot)
library(formatR)
library(PupillometryR)
library(sm)
library(hrbrthemes)#nice plotting
library(viridis)#nice plotting
library(gridExtra)
library(plotly)# intersczive plotting
library(ggpubr)

# Environment preparation -------------------------------------------------
source("key_script_exclusion.R")

# Load data
# Prolific files
RIDER3 <- read.csv("/Users/born/Downloads/prolific_export_64a27b0e95e257656fca800e.csv",na.strings=c("","NA"))
RIDER_1_and_2 <- read.csv("/Users/born/Downloads/prolific_export_62beaeb6107d21628f675ffa.csv",na.strings=c("","NA"))
data_RIDER3 <- read.csv("/Users/born/Downloads/results - 2023-07-20T141837.679.csv",na.strings = c("", "NA"))
# qualtrics files

qualtrics_RIDER1_3  <- read.csv("/Users/born/Downloads/RIDER_August 7, 2023_02.56.csv",na.strings=c("","NA"))

# matching participant days

qualtrics_RIDER1_3 <- qualtrics_RIDER1_3 %>%
  rename(participant = id)

data_RIDER3$participant <- as.character(data_RIDER3$participant)

data_RIDER3$session <- data_RIDER3 %>% group_indices(date)

RIDER3 <- RIDER3 %>%
  filter(Status %in% c("APPROVED"))

############################################################################################# DEMOGRAPHICS FOR RIDER 3 ###########################################################################################################

# Select specific columns from each data frame
selected_RIDER3 <- RIDER3 %>% select(Participant.id, Age, Sex,Status)
selected_data_RIDER3 <- data_RIDER3 %>% select(participant,session)
selected_qualtrics_RIDER1_3 <- qualtrics_RIDER1_3 %>% select(participant, Q1, Q2,PROLIFIC_PID)

selected_RIDER3 <- selected_RIDER3 %>%
  rename(PROLIFIC_PID = Participant.id)

selected_qualtrics_RIDER1_3 <- selected_qualtrics_RIDER1_3 %>%
  rename(Age = Q2)


# Filter for unique PROLIFIC_PID values in selected_RIDER3
unique_prolific_pids <- selected_RIDER3$PROLIFIC_PID %>% unique()

# Select rows from selected_qualtrics_RIDER1_3 with matching PROLIFIC_PID values
filtered_selected_qualtrics <- selected_qualtrics_RIDER1_3 %>%
  filter(PROLIFIC_PID %in% unique_prolific_pids)


filtered_selected_qualtrics <- filtered_selected_qualtrics[!duplicated(filtered_selected_qualtrics$PROLIFIC_PID), ]



vector1 <- c(filtered_selected_qualtrics$PROLIFIC_PID)
vector2 <- c(selected_RIDER3$PROLIFIC_PID)


# To find the difference between the two df -> there is one more participant in the Prolific data, that can't be found in the qualtrics data
values_only_in_vector1 <- setdiff(vector2, vector1)

# Add this data to the filtered_selected_qualtrics df to complete the selection


# the missing participant is missing it's PROLIFIC_PID in the qualtrics df, but he seemed have entered the ID in a different column (probabaly had tech issues)
missing_participant <- qualtrics_RIDER1_3 %>%
  filter(Q4 == excluded_1)

# Create a new data frame with the values to add
new_row <- data.frame(participant = excluded_1_1, Q1 = "male", Age = 30, PROLIFIC_PID = excluded_1)

# Combine the new row with the existing data frame
filtered_selected_qualtrics <- rbind(filtered_selected_qualtrics, new_row)


## Now we have the participants that received payment for a completed study in Prolfic
# we now need to exclude a few that did not end up in the analysis due to technical issues, missing data, etc.

# This participant is excluded, because he/she did the experiment twice. 
filtered_selected_qualtrics<-filtered_selected_qualtrics[!(filtered_selected_qualtrics$PROLIFIC_PID== excluded_2),]

# This participant is excluded, because he/she had severe technical issues throughout the task (objects did not stop rotating). 
filtered_selected_qualtrics<-filtered_selected_qualtrics[!(filtered_selected_qualtrics$PROLIFIC_PID== excluded_3),]

# This participant failed the attention checks
filtered_selected_qualtrics<-filtered_selected_qualtrics[!(filtered_selected_qualtrics$PROLIFIC_PID== excluded_4),]

# where is id?
filtered_selected_qualtrics<-filtered_selected_qualtrics[!(filtered_selected_qualtrics$PROLIFIC_PID== excluded_5),] # participant number 599 is not present in the Prolific dataframe

# used paper and pencil
filtered_selected_qualtrics<-filtered_selected_qualtrics[!(filtered_selected_qualtrics$PROLIFIC_PID== excluded_6),]

# did not do task
# where is id?
filtered_selected_qualtrics<-filtered_selected_qualtrics[!(filtered_selected_qualtrics$PROLIFIC_PID== excluded_7),]# participant number 576 is not present in the Prolific dataframe

# WM data not complete; LTM data not existent -> technical issues on either side
filtered_selected_qualtrics<-filtered_selected_qualtrics[!(filtered_selected_qualtrics$PROLIFIC_PID== excluded_8),]# participant number 584 is not present in the Prolific dataframe

unique_participant_count <- length(unique(filtered_selected_qualtrics$PROLIFIC_PID))

# Filter for unique PROLIFIC_PID values in selected_RIDER3
unique_prolific_pids2 <- data_RIDER3$participant %>% unique()

# Select rows from selected_qualtrics_RIDER1_3 with matching PROLIFIC_PID values
filtered_selected_qualtrics2 <- filtered_selected_qualtrics %>%
  filter(participant %in% unique_prolific_pids2)

# Convert the Age column to numeric (assuming it contains valid numeric values)
filtered_selected_qualtrics2$Age <- as.numeric(filtered_selected_qualtrics2$Age)

# Check if any values couldn't be converted to numeric
if (any(is.na(filtered_selected_qualtrics2$Age))) {
  # Handle cases where conversion failed (e.g., non-numeric or missing values)
  # You might need to clean or impute the data as needed
  print("Some values in the Age column couldn't be converted to numeric.")
} else {
  # Calculate the mean age
  mean_age <- mean(filtered_selected_qualtrics2$Age, na.rm = TRUE)
  cat("Mean Age:", mean_age, "\n")
}


summary_df <- filtered_selected_qualtrics2 %>%
  group_by(Q1, Age) %>%
  summarise(number_of_participants = n_distinct(PROLIFIC_PID))


# Assuming 'summary_df' is your summary data frame

ggplot(summary_df, aes(x = Age, y = number_of_participants, label = number_of_participants, fill = Q1)) +
  geom_bar(stat = "identity", color = "black") +
  geom_text(size = 3, position = position_stack(vjust = 0.5), color = "white") +
  facet_wrap(~ Q1) +
  labs(title = "Histogram of Number of Participants by Age and Gender",
       x = "Age",
       y = "Number of Participants") +
  scale_fill_viridis(discrete = TRUE)+
  theme_minimal() +
  theme(strip.text = element_text(size = 11, face = "bold"),
        axis.text.x = element_text(angle = 45, hjust = 1))


participant_demographics <- filtered_selected_qualtrics2 %>%
  group_by(Q1) %>%
  summarise(number_of_participants = n_distinct(PROLIFIC_PID))

# Count the number of unique PROLIFIC_PID values in the filtered_selected_qualtrics2 data
unique_prolific_count <- length(unique(filtered_selected_qualtrics2$PROLIFIC_PID))

# Print the statement
cat("We have demographic data for", unique_prolific_count, "unique participants.\n")
cat("The data clusters based on gender (Q1) as follows:\n")
print(participant_demographics)

cat("We are missing demographic information for", unique_participant_count - unique_prolific_count -7, "participants.\n")

############################################################################################# DEMOGRAPHICS FOR RIDER 1 ###########################################################################################################

# Prolific data
RIDER_1_and_2 <- read.csv("/Users/born/Downloads/prolific_export_62beaeb6107d21628f675ffa.csv",na.strings=c("","NA"))

# Qualtrics files
qualtrics_RIDER1_3  <- read.csv("/Users/born/Downloads/RIDER_August 7, 2023_02.56.csv",na.strings=c("","NA"))

data_RIDER1 <- read.csv("/Users/born/Downloads/results (33).csv",na.strings = c("", "NA"))

# The following participants were excluded due to piloting of the task and a flaw of a couple of condition files that happened in the beginning of the piloting

data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_9, ]# unfinished task and settings testing only 55 trials instead of 66
data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_10, ]# got tested with a wrong csv file containing the practice image stimuli/crown.png
data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_11, ]# got tested with a wrong csv file containing the practice image stimuli/eiffeltower.png
data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_12, ]# got tested with a wrong csv file containing the practice image stimuli/eiffeltower.png
data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_13, ]#got tested with a wrong csv file containing the practice image stimuli/eiffeltower.png

# The following participants were excluded due to technical issues / not passing of attention checks: 

data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_14, ]# failed attention checks
data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_15, ]# failed attention checks (file from: 2022-10-06 09:41:39)
data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_16, ]# restarted study after technical issue from the participant side
data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_17, ]# due to introduction of experiment inputs via arc server, I had an error in my code leading to the wrong c file assignment here
data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_18, ]#restarted the study
data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_19, ]#redid the task
data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_20, ]# quit the experiment half way through by accident
data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_21, ]# failed attention checks
data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_22, ]# not real participant data, B or I playing around
data_RIDER1 <- data_RIDER1[data_RIDER1$participant != excluded_23, ]# failed attention checks
#data <- data[data$participant != 146, ]# did not finish the task due to technical problems assumingly, will delete after assigning participant id
# by time stamp, as 146 was given more than ones to a participant

#note, that this participant ID is now not identical with the conditions file used
data_RIDER1$session <- data_RIDER1 %>% group_indices(date) 

# Get the length of the unique participant IDs
unique_participant_count <- length(unique(data_RIDER1$session))

# now delete data$participant=="1" (former excluded_23) due to unfinished experiment
data_RIDER1<-data_RIDER1[!(data_RIDER1$session=="1"),]



# first I filter from the df only the rows where year is 2022, because RIDER1 was conducted in 2022 

RIDER_1_and_2$year <- as.numeric(substr(RIDER_1_and_2$Started.at, 1, 4))

RIDER_1_and_2 <- RIDER_1_and_2 %>%
  filter(year == 2022)

# and I only want to keep the approved submissions

RIDER_1_and_2 <- RIDER_1_and_2 %>%
  filter(Status %in% c("APPROVED"))

# Select specific columns from each data frame
selected_RIDER1 <- RIDER_1_and_2 %>% select(Participant.id, Age, Sex,Status)
selected_data_RIDER1 <- data_RIDER1 %>% select(participant,session)
selected_qualtrics_RIDER1_3 <- qualtrics_RIDER1_3 %>% select(id, Q1, Q2,PROLIFIC_PID)

selected_RIDER1 <- selected_RIDER1 %>%
  rename(PROLIFIC_PID = Participant.id)

selected_qualtrics_RIDER1_3 <- selected_qualtrics_RIDER1_3 %>%
  rename(Age = Q2)

selected_qualtrics_RIDER1_3 <- selected_qualtrics_RIDER1_3 %>%
  rename(participant = id)


# Filter for unique PROLIFIC_PID values in selected_RIDER1 to get the participants that where payed for their submission
unique_prolific_pids <- selected_RIDER1$PROLIFIC_PID %>% unique()

# Select rows from selected_qualtrics_RIDER1_3 with matching PROLIFIC_PID values
filtered_selected_qualtrics <- selected_qualtrics_RIDER1_3 %>%
  filter(PROLIFIC_PID %in% unique_prolific_pids)


filtered_selected_qualtrics <- filtered_selected_qualtrics[!duplicated(filtered_selected_qualtrics$PROLIFIC_PID), ]



vector1 <- c(filtered_selected_qualtrics$PROLIFIC_PID)
vector2 <- c(selected_RIDER1$PROLIFIC_PID)


# Check if all the participants that were tested via Prolific also match with the ones recorded through Qualtrics <- difference should be 0
values_only_in_vector1 <- setdiff(vector2, vector1)

#-> There is no difference between the unique IDS, so it seem to be correct
cat(length(values_only_in_vector1), "length, which means all the participants from prolific are present in the qualtrics data")


# Filter for unique PROLIFIC_PID values in selected_RIDER1
unique_prolific_pids2 <- data_RIDER1$participant %>% unique()

# Select rows from selected_qualtrics_RIDER1_3 with matching PROLIFIC_PID values
filtered_selected_qualtrics2 <- filtered_selected_qualtrics %>%
  filter(participant %in% unique_prolific_pids2)

# Age information
# Convert the Age column to numeric (assuming it contains valid numeric values)
filtered_selected_qualtrics2$Age <- as.numeric(filtered_selected_qualtrics2$Age)

# Check if any values couldn't be converted to numeric
if (any(is.na(filtered_selected_qualtrics2$Age))) {
  # Handle cases where conversion failed (e.g., non-numeric or missing values)
  # You might need to clean or impute the data as needed
  print("Some values in the Age column couldn't be converted to numeric.")
} else {
  # Calculate the mean age
  mean_age <- mean(filtered_selected_qualtrics2$Age, na.rm = TRUE)
  cat("Mean Age:", mean_age, "\n")
}




summary_df <- filtered_selected_qualtrics2 %>%
  group_by(Q1, Age) %>%
  summarise(number_of_participants = n_distinct(PROLIFIC_PID))


# Assuming 'summary_df' is your summary data frame

ggplot(summary_df, aes(x = Age, y = number_of_participants, label = number_of_participants, fill = Q1)) +
  geom_bar(stat = "identity", color = "black") +
  geom_text(size = 3, position = position_stack(vjust = 0.5), color = "white") +
  facet_wrap(~ Q1) +
  labs(title = "Histogram of Number of Participants by Age and Gender",
       x = "Age",
       y = "Number of Participants") +
  scale_fill_viridis(discrete = TRUE)+
  theme_minimal() +
  theme(strip.text = element_text(size = 12, face = "bold"),
        axis.text.x = element_text(angle = 45, hjust = 1))


participant_demographics <- filtered_selected_qualtrics2 %>%
  group_by(Q1) %>%
  summarise(number_of_participants = n_distinct(PROLIFIC_PID))

# Count the number of unique PROLIFIC_PID values in the filtered_selected_qualtrics2 data
unique_prolific_count <- length(unique(filtered_selected_qualtrics2$PROLIFIC_PID))

# Print the statement
cat("We have data demographic information for", unique_prolific_count, "unique participants.\n")
cat("The data clusters based on gender (Q1) as follows:\n")
print(participant_demographics)

cat("We are missing demographic information for", unique_participant_count - unique_prolific_count, "participants.\n")


############################################################################################# DEMOGRAPHICS FOR RIDER 2a ###########################################################################################################

# Load data
# RIDER2a data
data_RIDER2 <- read.csv("/Users/born/Downloads/results (64).csv",na.strings=c("","NA"))

# Prolific data
RIDER_1_and_2 <- read.csv("/Users/born/Downloads/prolific_export_62beaeb6107d21628f675ffa.csv",na.strings=c("","NA"))

# Qualtrics files
qualtrics_RIDER1_3  <- read.csv("/Users/born/Downloads/RIDER_August 7, 2023_02.56.csv",na.strings=c("","NA"))

#data_RIDER2$session <- (substr(data_RIDER2$date, 1,10))

#RIDER2a_test_dates <- c("2023-04-14", "2023-04-17", "2023-04-18", "04/18/2023", "2023-04-19","2023-04-20")

RIDER2a_test_dates <- c(included_1,included_2,included_3,included_4,included_5,included_6,included_7,included_8,included_9,included_10,included_11,
                        included_12,included_13,included_14,included_15,included_16,included_17,included_18,included_19,included_20,included_21,included_22,included_23,included_24,
                        included_25,included_26,included_27,included_28,included_29,included_30,included_31,included_32,included_33,included_34,included_35,included_36,included_37,
                        included_38,included_39,included_40,included_41,included_42,included_43,included_44,included_45,included_46,included_47,included_48,included_49,included_50,
                        included_51,included_52,included_53,included_54,included_55,included_56,included_57,included_58,included_59,included_60,included_61,included_62,included_63,included_64,included_65)


data_RIDER2 <- data_RIDER2 %>%
  filter(date %in% c(RIDER2a_test_dates))

#excluded participants diff reasons, technical issues, etc.(not necessary, because I listed the included ones above)
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_24),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_25),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_26),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_27),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_59),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_60),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_61),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_62),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_63),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_64),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_65),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_66),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_67),]
# 
# # exclusion due to performance issues
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_28),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_29),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_30),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_31),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_32),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_33),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_34),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_35),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_36),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_37),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_38),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_39),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_40),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_41),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_42),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_43),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_44),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_45),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_46),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_47),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_48),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_49),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_50),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_51),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_52),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_53),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_54),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_55),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_56),]
# data_RIDER2<-data_RIDER2[!(data_RIDER2$date==excluded_57),]


# and I only want to keep the approved submissions

RIDER_1_and_2 <- RIDER_1_and_2 %>%
  filter(Status %in% c("APPROVED"))

RIDER_1_and_2$year <- as.numeric(substr(RIDER_1_and_2$Started.at, 1, 4))

RIDER_1_and_2 <- RIDER_1_and_2 %>%
  filter(year == 2023)

# Select specific columns from each data frame
selected_RIDER1 <- RIDER_1_and_2 %>% select(Participant.id, Age, Sex,Status)
selected_data_RIDER2 <- data_RIDER2 %>% select(participant,session)
selected_qualtrics_RIDER1_3 <- qualtrics_RIDER1_3 %>% select(id, Q1, Q2,PROLIFIC_PID)

selected_RIDER1 <- selected_RIDER1 %>%
  rename(PROLIFIC_PID = Participant.id)

selected_qualtrics_RIDER1_3 <- selected_qualtrics_RIDER1_3 %>%
  rename(Age = Q2)

selected_qualtrics_RIDER1_3 <- selected_qualtrics_RIDER1_3 %>%
  rename(participant = id)


# Filter for unique PROLIFIC_PID values in selected_RIDER1 to get the participants that where payed for their submission
unique_prolific_pids <- selected_RIDER1$PROLIFIC_PID %>% unique()

# Select rows from selected_qualtrics_RIDER1_3 with matching PROLIFIC_PID values
filtered_selected_qualtrics <- selected_qualtrics_RIDER1_3 %>%
  filter(PROLIFIC_PID %in% unique_prolific_pids)


filtered_selected_qualtrics <- filtered_selected_qualtrics[!duplicated(filtered_selected_qualtrics$PROLIFIC_PID), ]



vector1 <- c(filtered_selected_qualtrics$PROLIFIC_PID)
vector2 <- c(selected_RIDER1$PROLIFIC_PID)


# Check if all the participants that were tested via Prolific also match with the ones recorded through Qualtrics <- difference should be 0
values_only_in_vector1 <- setdiff(vector2, vector1)

#-> There is no difference between the unique IDS, so it seem to be correct
cat(length(values_only_in_vector1), "length, which means all the participants from prolific are present in the qualtrics data")


# Filter for unique PROLIFIC_PID values in selected_RIDER1
unique_prolific_pids2 <- data_RIDER2$participant %>% unique()

# Select rows from selected_qualtrics_RIDER1_3 with matching PROLIFIC_PID values
filtered_selected_qualtrics2 <- filtered_selected_qualtrics %>%
  filter(participant %in% unique_prolific_pids2)

# Age informaton

# Convert the Age column to numeric (assuming it contains valid numeric values)
filtered_selected_qualtrics2$Age <- as.numeric(filtered_selected_qualtrics2$Age)

# Check if any values couldn't be converted to numeric
if (any(is.na(filtered_selected_qualtrics2$Age))) {
  # Handle cases where conversion failed (e.g., non-numeric or missing values)
  # You might need to clean or impute the data as needed
  print("Some values in the Age column couldn't be converted to numeric.")
} else {
  # Calculate the mean age
  mean_age <- mean(filtered_selected_qualtrics2$Age, na.rm = TRUE)
  cat("Mean Age:", mean_age, "\n")
}




summary_df <- filtered_selected_qualtrics2 %>%
  group_by(Q1, Age) %>%
  summarise(number_of_participants = n_distinct(PROLIFIC_PID))


# Assuming 'summary_df' is your summary data frame

ggplot(summary_df, aes(x = Age, y = number_of_participants, label = number_of_participants, fill = Q1)) +
  geom_bar(stat = "identity", color = "black") +
  geom_text(size = 3, position = position_stack(vjust = 0.5), color = "white") +
  facet_wrap(~ Q1) +
  labs(title = "Histogram of Number of Participants by Age and Gender",
       x = "Age",
       y = "Number of Participants") +
  scale_fill_viridis(discrete = TRUE)+
  theme_minimal() +
  theme(strip.text = element_text(size = 12, face = "bold"),
        axis.text.x = element_text(angle = 45, hjust = 1))


participant_demographics <- filtered_selected_qualtrics2 %>%
  group_by(Q1) %>%
  summarise(number_of_participants = n_distinct(PROLIFIC_PID))

# Count the number of unique PROLIFIC_PID values in the filtered_selected_qualtrics2 data
unique_prolific_count <- length(unique(filtered_selected_qualtrics2$PROLIFIC_PID))

# Print the statement
cat("We have data demographic information for", unique_prolific_count, "unique participants.\n")
cat("The data clusters based on gender (Q1) as follows:\n")
print(participant_demographics)

cat("We are missing demographic information for", unique_participant_count - unique_prolific_count, "participants.\n")