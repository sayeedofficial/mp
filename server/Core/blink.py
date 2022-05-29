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


  
fig = go.Figure(data=go.Scatter(
    x = x,
    y = y,
    mode = 'lines'
))


voltage = y

indices = find_peaks(voltage,threshold=0,distance = 50)[0]
peaks = list(i for i in indices if voltage[i]>90)

fig = go.Figure()
fig.add_trace(go.Scatter(
    y=voltage,
    mode='lines',
    name='Original Plot'
))


fig.add_trace(go.Scatter(
    x=peaks,
    y=[voltage[j] for j in peaks],
    mode='markers',
    marker=dict(
        size=8,
        color='red',
        symbol='cross'
    ),
    name='Detected Peaks'
))


fig.write_image("images/fig.svg")



os.remove("./files/data.csv")
os.remove("./files/data.txt")

print(len(peaks))