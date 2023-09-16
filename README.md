# Zuri tasktwo

Task 2 Repository

## URL: https://tasktwo-2itn.onrender.com/api/

# Person Backend Documentation

## Introduction

The **Person** is a RESTful API that allows users to interact with a `Person` resource. This Backendservice provides basic CRUD (Create, Read, Update, Delete) operations for managing `Person` objects.

### UML Diagram

### Resource: Person

A `Person` object represents an individual with a name and age.

#### Fields

- `name` (String): The unique identifier of the person. It is a required field and must be a string.

## API Endpoints

### 1. Create a Person

**Endpoint:** `POST /api/`

**Request:**

```json
{
  "name": "Mike May"
}
```

**Response:**

```json
{
  "user_id": "6504bdbe52c59f309f424732",
  "name": "Mike May"
}
```

### 2. Retrieve a Person

**Endpoint:** `GET /api/{user_id}/`

**Response:**

```json
{
  "user_id": "6504bdbe52c59f309f424732",
  "name": "Mike May"
}
```

### 3. Update a Person

**Endpoint:** `PUT /api/{user_id}/`

**Request:**

```json
{
  "user_id": "6504bdbe52c59f309f424732",
  "name": "Mike Doe"
}
```

**Response:**

```json
{
  "message": "Name with the given id has been updated"
}
```

### 4. Delete a Person

**Endpoint:** `DELETE /api/{user_id}/`

**Response:**

```json
{
  "message": "Person with the given id has been deleted"
}
```

## Example Usage

```Javascript
# Creating a new person


url = "https://tasktwo-2itn.onrender.com/api/"
payload = {
    "name": "Mike May",

}
response = requests.post(url, json=payload)
print(response.json())

# Retrieving a person
user_id = 6504bdbe52c59f309f424732
url = f"https://tasktwo-2itn.onrender.com/api/{user_id}/"
response = requests.get(url)
print(response.json())

# Updating a person
user_id = 6504bdbe52c59f309f424732
url = f"https://tasktwo-2itn.onrender.com/api/{user_id}/"
payload = {
    "name": "Mike May Updated"
}
response = requests.put(url, json=payload)
print(response.json())

# Deleting a person
user_id = 6504bdbe52c59f309f424732
url = f"https://tasktwo-2itn.onrender.com/api/{user_id}/"
response = requests.delete(url)
print(response.json())
```

## Error Handling

- **200 Okay:** If the request is ok.
- **400 Bad Request:** If the request is malformed or missing required fields.
- **404 Not Found:** If the requested `Person` does not exist.
- **405 Method Not Allowed:** If an unsupported HTTP method is used on an endpoint.

## Testing

To Run the Automated Test, run the command (from within the project directory terminal)

```Node
Node server.js
```

## Conclusion

The Person Backendservice provides a simple and easy-to-use interface for managing `Person` objects. It allows for creating, retrieving, updating, and deleting `Person` records through a RESTful API. Use the provided endpoints to interact with the service and manage your `Person` data.

### Developer:

- Olawuwo Abideen <https://github.com/olawuwo-abideen>
