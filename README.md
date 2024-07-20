# Runningbuddy Calculations

The service provides the most popular calculations in terms of pace, distance and times for runners. It currently supports kilometers and minuters per kilometers as units, with a planned implementation for miles and minutes per mile. 

The service is separated into a backend API written in Node TypeScript and a frontend written in React TypeScript. The primary goal for this project is to learn TypeScript and Node, and improve my React skills. 

# Backend
The backend of the service is created with NodeJS, written in TypeScript and compiled to a JavaScript file that is executed. 

The service serves the following endpoints:

* `pace-calculator/times`
* `pace-calculator/specified-distance`
* `pace-calculator/pace`
* `pace-calculator/distance`

## `/times`

The `times` endpoint recieves a *unit*, *min* and *sec* input parameter from the request body, and calculates the times for the most popular distances: 5K, 10K, Half-Marathon, and Marathon. These times are returned in JSON format for these distances (see example response body). *Unit* can either be `miles` or `km`.

The *sec* input parameter must be less than 60, and both input parameters must be greater than or equal to 0.

**Example Request Body:**
```
{
    "unit": "km",
    "min": 5,
    "sec": 50
}
```

**Invocation URL:** `http://localhost:8080/pace-calculator/distances` <br>
**Method:** POST <br>

**Example Response Body:**
```
{
    "5K": {
        "hours": "00",
        "minutes": "29",
        "seconds": "10"
    },
    "10K": {
        "hours": "00",
        "minutes": "58",
        "seconds": "20"
    },
    "Half Marathon": {
        "hours": "02",
        "minutes": "03",
        "seconds": "04"
    },
    "Marathon": {
        "hours": "04",
        "minutes": "06",
        "seconds": "08"
    }
}
```

## `/specified-distance`
The `specified-distance` endpoint recieves a *distanceUnit*, *distance*, *min*, *sec* and *paceUnit* input parameter from the request body, and calculates the running time for the provided distance given the provided pace (min and sec). The time for this distance is then returned in JSON format (see example response body). The *distanceUnit* and *paceUnit* parameter must be either `miles` or `km`. 

The *distances* input parameter is the distances in kilometers or miles (based on `distanceUnit`). The *sec* parameter must be less than 60, and all input parameters must be greater or equal to 0.

**Example Request Body:**
```
{
    "distanceUnit": "miles",
    "distance": 8.45,
    "min": 5,
    "sec": 45,
    "paceUnit": "km"
}
```

**Invocation URL:** `http://localhost:8080/pace-calculator/specified-distance`<br>
**Method:** POST

**Example Response Body:**
```
{
    "hours": "01",
    "minutes": "18",
    "seconds": "10"
}
```

## `/pace`
The `pace` endpoint receives a *distanceUnit*, *distance*, *time* object, and *paceUnit* input parameter from the request body, and calculates the pace of the run given the provided input parameters. The pace is then returned in JSON format (see example response body). *distanceUnit* and *paceUnit* can either be `miles` or `km`. 

The *distance* parameter must be greater than 0, *time.min* and *time.sec* must be less than 60.

**Example Request Body:**
```
{
    "distanceUnit": "miles",
    "distance": 6,
    "time": {
        "hour": 0,
        "min": 58,
        "sec": 44
    },
    "paceUnit": "km"
}
```

**Invocation URL:** `http://localhost:8080/pace-calculator/pace` <br>
**Method:** POST

**Example Response Body:**
```
{
    "minutes": "06",
    "seconds": "05"
}
```

## `/distance`
The `distance` endpoint receives a *distanceUnit*, *paceUnit*, *time* object and a *pace* object, both containing numbers representing time units, as input parameters from the request body. For the *time* object, hour is included, whereas the *pace* object only contains minutes and seconds. The endpoint calculates the distance ran given the running time and pace, and returns the distance in JSON format (see example response body).

All time and pace values must be greater than or equal to 0. Running time's *min* must be less than 60, and *sec* for both objects must be less than 60.<br>
Both unit parameters can either be `km` or `miles`.

**Example Request Body:**
```
{
    "distanceUnit": "km",
    "paceUnit": "miles",
    "time": {
        "hour": 0,
        "min": 45,
        "sec": 0
    },
    "pace": {
        "min": 8,
        "sec": 52
    }
}
```

**Invocation URL:** `http://localhost:8080/pace-calculator/distance` <br>
**Method:** POST

**Example Response Body:**
```
{
    "distance": "8.17"
}
```