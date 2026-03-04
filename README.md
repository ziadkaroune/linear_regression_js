# Linear Regression Price Prediction

A JavaScript-based linear regression project that predicts car prices based on mileage using the **Least Squares method**.

##  Overview

This project implements linear regression to estimate car prices based on their mileage. It provides a simple command-line interface where users can input a mileage value and receive a predicted price.

**Linear Regression Formula:**
```
ŷ = θ₀ + θ₁ × x
```
Where:
- `ŷ` = predicted price
- `θ₀` = intercept coefficient
- `θ₁` = slope coefficient
- `x` = mileage

##  Current Implementation

### Least Squares Solution
The current implementation uses the **Least Squares method** to calculate the optimal coefficients (θ₀ and θ₁) that minimize the sum of squared errors between predicted and actual values.

**Key Formulas:**

θ₁ (slope) = `(n × Σ(xy) - Σx × Σy) / (n × Σ(x²) - (Σx)²)`

θ₀ (intercept) = `(Σy - θ₁ × Σx) / n`

Where `n` is the number of observations.

## Project Structure

```
ft_linear_regression/
├── index.js                          # Main entry point - user interface
├── package.json                      # Project dependencies
├── data.csv                          # Training data (mileage, price)
├── Least_Squares_solution/
│   ├── logic.js                     # Core regression logic
│   └── coefficients.js              # Data processing and coefficient calculation
├── Gradient_Descent_solution/       # [Coming Soon]
│   └── logic.js
└── Bonus/
    └── plot.js                      # Visualization utilities
```

##  Data Format

The project uses a CSV file (`data.csv`) with the following format:

```csv
km,price
240000,3650
139800,3800
150500,4400
...
```

- **km**: Mileage in kilometers (independent variable x)
- **price**: Price in currency units (dependent variable y)

##  Getting Started

### Installation

```bash
npm install
```

### Usage

Run the main program:

```bash
node index.js
```

The program will prompt you to enter a mileage value:

```
--- Système de Prédiction de Prix ---
Saisir kilométrage : 180000
Prix final : 4875.23
```

##  Dependencies

- **chart.js** (^4.5.1) - Data visualization
- **chartjs-node-canvas** (^5.0.0) - Chart rendering for Node.js

##  How It Works

1. **Data Loading**: The program reads `data.csv` and calculates necessary statistics:
   - Sum of x (Σx)
   - Sum of y (Σy)
   - Sum of x² (Σ(x²))
   - Sum of xy (Σ(xy))
   - Number of observations (n)

2. **Coefficient Calculation**: Using the Least Squares formulas, the program calculates:
   - θ₁ (slope): Shows how price changes per kilometer
   - θ₀ (intercept): Base price when mileage is zero

3. **Price Prediction**: For a given mileage, the program uses the linear equation to estimate the price

##  Future Implementations

### Gradient Descent Solution
The `Gradient_Descent_solution/` folder is reserved for a Gradient Descent implementation, which will:
- Use iterative optimization to find the best coefficients
- Be useful for larger datasets and multiple features
- Provide an alternative approach for comparison

##  Notes

- The input must be a valid numeric value for mileage
- Error handling is in place for invalid inputs
- The program uses async/await for asynchronous operations

##  Bonus Features

The `Bonus/` folder contains additional utilities for data visualization and analysis (e.g., `plot.js` for generating charts).


