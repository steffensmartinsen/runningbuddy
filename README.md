# Runningbuddy Calculations

The service provides the most popular calculations in terms of pace, distance and times for runners. It currently supports kilometers and minuters per kilometers as units, with a planned implementation for miles and minutes per mile. 

The service is separated into a backend API written in Node TypeScript and a frontend written in React TypeScript. The primary goal for this project is to learn TypeScript and Node, and improve my React skills. 

# Backend
The backend of the service is created with NodeJS, written in TypeScript and compiled to a JavaScript file that is executed. 

The service serves the following endpoints:

* `pace-calculator/distances`
* `pace-calculator/specified-distance`

## distances

The `distances` endpoint recieves a *minutes* and *seconds* input parameter from the request body, and calculates the times for the most popular distances: 5K, 10K, Half-Marathon, and Marathon. These times are returned in JSON format for these distances (see example response body).

The *seconds* input parameter must be less than 60, and both input parameters must be greater than or equal to 0.

**Example Request Body:**
```
{
    "minutes": 5,
    "seconds": 50
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

## specified-distance
The `specified-distance` endpoint recieves a *distance*, *minutes* and *seconds* input parameter from the request body, and calculates the running time for the provided distance given the provided pace (minutes and seconds). The time for this distance is then returned in JSON format (see example response body).

The *distances* input parameter is the distances in kilometers. The *seconds* parameter must be less than 60, and all input parameters must be greater or equal to 0.

**Example Request Body:**
```
{
    "distance": 8.45,
    "minutes": 5,
    "seconds": 45
}
```

**Invocation URL:** `http://localhost:8080/pace-calculator/specified-distance`<br>
**Method:** POST

**Example Response Body:**
```
{
    "Pace": {
        "hours": "00",
        "minutes": "48",
        "seconds": "35"
    }
}
```