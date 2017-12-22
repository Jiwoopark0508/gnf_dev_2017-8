import json
import os 
import io

filePath = os.path.dirname(os.path.realpath(__file__))
jsonPath = os.path.join(filePath, "../src/components/schedule.json")
scheudles = {}
with io.open(jsonPath, encoding="utf-8") as f:
    schedules = json.load(f)
    for schedule in schedules:
        schedule["formattedDate"] = schedule["date"][:-3] + " " +\
                                     schedule["time"][:5]

with io.open(jsonPath, "w", encoding="utf-8") as f:
    json.dump(schedules, f, ensure_ascii=False)
