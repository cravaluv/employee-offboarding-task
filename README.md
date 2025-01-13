# Offboarding Application

The Offboarding Application is designed to manage the offboarding process of employees within an organization. It provides features to list employees, view employee details, and manage their offboarding status. The application is built using Angular and follows a modular structure.

## Features

- View a list of employees
- Filter employees by name and department
- View detailed information about each employee
- Offboard employees

## Technologies Used

- Angular
- TypeScript
- Angular Material
- RxJS
- HTML/CSS

## Setup Instructions

### Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later)
- Angular CLI (version 12.x or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/cravaluv/offboarding-management.git
   cd offboarding-management

2. **Install dependencies:**

   ```bash
   npm install

3. **Run the application:**

   ```bash
   npm run start:proxy
This command will start the Angular application and configure it to use a proxy for API requests.

4. **Running Tests:**

   ```bash
   ng test

## Folder Structure
- src/app/core: contains non-business features and shared services that are used across the application. This includes utility services, interceptors, and other core functionalities that are not specific to any particular business logic.
- src/app/features/offboarding: Contains the main features of the offboarding module.
- src/app/shared: Contains shared utilities, pipes, and components.

## Example Mock API
**GET /employees**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "department": "Engineering",
    "status": "ACTIVE",
    "email": "some.email@wp.pl",
    "equipments": [
      { 
        "id": "123",
        "name": "Macbook air"
      },
      { 
        "id": "321",
        "name": "Magic Mouse"
      }
    ]
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "department": "Marketing",
    "status": "OFFBOARDED",
    "email": "some.email@wp.pl",
    "equipments": [
      { 
        "id": "123",
        "name": "Macbook air"
      },
      { 
        "id": "321",
        "name": "Magic Mouse"
      }
    ]
  },
  {
    "id": 3,
    "name": "Mickey Mouse",
    "department": "HR",
    "status": "ACTIVE",
    "email": "some.email@wp.pl",
    "equipments": []
  }
]
```
**GET /employees/1**
```json
{
  "id": "1",
  "name": "John Doe",
  "department": "Engineering",
  "status": "ACTIVE",
  "email": "some.email@wp.pl",
  "equipments": [
    {
      "id": "123",
      "name": "Macbook air"
    },
    {
      "id": "321",
      "name": "Magic Mouse"
    }
  ]
}
```
**POST /employees/1/offboard**

body:
```json
{
  "address": {
    "streetLine": "Street",
    "country": "Country",
    "postalCode": "11-111",
    "receiver": "Donald Duck"
  },
  "notes": "notes",
  "phone": "0123456789",
  "email": "email@gmail.com"
}
