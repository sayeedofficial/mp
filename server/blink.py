import numpy as np
import pandas as pd
import os
import shutil
import matplotlib.pyplot as plt
import plotly.graph_objects as go
import plotly.graph_objects as go
import re
from scipy.signal import find_peaks


filename = os.listdir("./files")[0]
receivedFilepath = "./files/"+filename
os.rename(receivedFilepath,"./files/data.txt")

temp = pd.read_csv("./files/data.txt",delimiter="\t")
headerList = ['Timestamp', 'Voltage']
temp.to_csv("./files/data.csv",header= headerList,index=None);

data = pd.read_csv("./files/data.csv")

x = data['Timestamp']
y = data['Voltage']

# i = 0.0
# j = 1
# one_minute_time = []
# one_minute_voltage = []

# while i < 60.0:
#     one_minute_time.append(x[j])
#     one_minute_voltage.append(y[j])
#     i+=0.01
#     j+=1
  
fig = go.Figure(data=go.Scatter(
    x = x,
    y = y,
    mode = 'lines'
))

#fig.show()

voltage = y

indices = find_peaks(voltage,threshold=0,distance = 50)[0]
peaks = list(i for i in indices if voltage[i]>98)

# fig = go.Figure()
# fig.add_trace(go.Scatter(
#     y=voltage,
#     mode='lines+markers',
#     name='Original Plot'
# ))


# fig.add_trace(go.Scatter(
#     x=peaks,
#     y=[voltage[j] for j in peaks],
#     mode='markers',
#     marker=dict(
#         size=8,
#         color='red',
#         symbol='cross'
#     ),
#     name='Detected Peaks'
# ))
os.remove("./files/data.csv")
os.remove("./files/data.txt")

print(len(peaks))