import numpy as np
import pandas as pd
from matplotlib import pyplot as plt
from sklearn.metrics import confusion_matrix
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
import seaborn as sns
import ast
sns.set()


value = input()
response = ast.literal_eval(value)

rage = int(response["iage"])
rgender = response["igender"]
rblinkrate = int(response["iblinkrate"])
rredness = response["iredness"]
rburning_sensation = response["iburning_sensation"]
rscreen_time = int(response["iscreen_time"])
rscratchy_level = response["iscratchy_level"]
rblurred_vision = response["iblurred_vision"]
rdryness = "None"
rthready_mucus_discharge = response["ithready_mucus_discharge"]


def formatFile(df):
    le = LabelEncoder()
    
    label = le.fit_transform(df['Age'])
    df["Age"] = label
  
    label = le.fit_transform(df['Gender'])
    df["Gender"] = label

    label = le.fit_transform(df['BlinkRate'])
    df["BlinkRate"] = label

    label = le.fit_transform(df['RednessLevel'])
    df["RednessLevel"] = label

    label = le.fit_transform(df['ScreenTime'])
    df["ScreenTime"] = label

    label = le.fit_transform(df['BurningSensation'])
    df["BurningSensation"] = label

    label = le.fit_transform(df['ScratchySensation'])
    df["ScratchySensation"] = label

    label = le.fit_transform(df['ThreadyDischarge'])
    df["ThreadyDischarge"] = label

    label = le.fit_transform(df['BlurredVision'])
    df["BlurredVision"] = label

    label = le.fit_transform(df['Dryness'])
    df["Dryness"] = label
    return df

def predictDisease(df,input):
  formattedInput = pd.DataFrame.from_dict([input])
  df = df.append(formattedInput, ignore_index = True)
  df = formatFile(df)
  
  X = df.iloc[:-1, :-1]
  y = df.iloc[:-1,-1]
  input = df.iloc[[-1],:-1]

  knn = KNeighborsClassifier(n_neighbors=3)
  knn.fit(X, y)
  output = knn.predict(input)
  return output


df = pd.read_csv("./Data/Data.csv")

input = {"Age":rage,"Gender":rgender,"BlinkRate":rblinkrate,"RednessLevel":rredness , "ScreenTime": rscreen_time,"BurningSensation":rburning_sensation,"ScratchySensation": rscratchy_level, "ThreadyDischarge":rthready_mucus_discharge,"BlurredVision":rblurred_vision,"Dryness":rdryness}
output = predictDisease(df,input)
result = ["Mild","Low","Medium","High"]
result = result[output[0]]
print(result)