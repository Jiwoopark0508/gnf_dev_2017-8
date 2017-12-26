import json
import os 
import io
"""
    JSON Formatter
"""
filePath = os.path.dirname(os.path.realpath(__file__))
jsonPath = os.path.join(filePath, "../frontend/src/components")
schedules = {}
with io.open(jsonPath + '/schedule.json', encoding="utf-8") as f:
    schedules = json.load(f)
    for (idx, schedule) in enumerate(schedules):
        schedule["id"] = idx
        schedule["formattedStartTime"] = schedule["date"][:-3] + " " +\
                                     schedule["time"][:5]
        schedule["formattedEndTime"] = schedule["date"][:-3] + " " +\
                                     schedule["time"][-5:]

with io.open(jsonPath + '/schedule.json', "w", encoding="utf-8") as f:
    json.dump(schedules, f, ensure_ascii=False)
