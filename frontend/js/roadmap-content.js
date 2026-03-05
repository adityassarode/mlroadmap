// This file contains the EXACT roadmap content as provided.
// Do NOT modify the roadmapContent string — it must remain identical to the original.

const DEFAULT_ROADMAP_CONTENT = `# 📚 Machine Learning Roadmap

A **step-by-step roadmap to learn Applied Machine Learning from scratch** and build a strong **GitHub portfolio with real-world projects**.

This roadmap focuses on **practical learning**, meaning after every major topic you will **build a project** to apply what you learned.

🎯 Goal

By the end of this roadmap you should:

• Understand the full ML workflow  
• Build **8+ ML & Data projects**  
• Deploy at least **one ML model as an API**  
• Have a **professional GitHub ML portfolio**

---

# 1️⃣ Python (Core + OOPS)

Python is the **main programming language used in Machine Learning**.

You must be very comfortable writing Python programs before learning ML.

---

## 🎥 How many videos to watch

Watch **3–4 complete videos** on Python fundamentals and OOP.

Total learning time: **15–20 hours**

---

## 🔎 What to search on YouTube

Search these one by one:

\`\`\`
python for data science hands on
python oops for beginners practical
python classes objects python real example
python functions loops dictionaries practice
\`\`\`

---

## 🎯 What to get perfect at

You should be able to do these without help:

- Writing Python functions
- Using loops and conditionals
- Working with lists and dictionaries
- Creating classes and objects
- Reading and writing files
- Structuring programs cleanly

---

## 🧠 What to Build

### Project: Student Management System

Build a **CLI (Command Line Interface) program**.

Features:

- Add new student
- View all students
- Search student
- Delete student
- Save students to file

Example menu:

\`\`\`
1 Add Student
2 View Students
3 Search Student
4 Delete Student
5 Save Data
6 Exit
\`\`\`

Example student structure:

\`\`\`json
{
"name":"Rahul",
"age":21,
"marks":85
}
\`\`\`

Repository name:

\`\`\`
python-student-management-system
\`\`\`

---

# 2️⃣ NumPy

NumPy is used for **mathematical operations and numerical computing**.

Most ML algorithms rely on **matrix calculations**.

---

## 🎥 How many videos to watch

Watch **1 full tutorial video**.

Learning time: **4–5 hours**

---

## 🔎 What to search on YouTube

\`\`\`
numpy for data science complete tutorial
\`\`\`

---

## 🎯 What to get perfect at

You should know:

- Creating NumPy arrays
- Array indexing
- Vectorized operations
- Broadcasting
- Matrix multiplication
- Basic statistics using arrays

---

## 🧠 What to Build

### Project: Statistical Calculator

Create a tool that calculates statistics.

Input:

\`\`\`
[10,20,30,40,50]
\`\`\`

Output:

\`\`\`
Mean:30
Variance:200
StdDev:14.14
\`\`\`

Features:

- Mean
- Median
- Variance
- Standard deviation
- Matrix multiplication

Repository name:

\`\`\`
numpy-statistics-toolkit
\`\`\`

---

# 3️⃣ Pandas (Data Cleaning)

In Machine Learning **80% of the work is cleaning data**.

---

## 🎥 How many videos to watch

Watch **3 tutorial videos**.

Learning time: **8–10 hours**

---

## 🔎 What to search on YouTube

\`\`\`
pandas data cleaning real dataset
handling missing values pandas practical
pandas groupby explained with example
\`\`\`

---

## 🎯 What to get perfect at

You should learn:

- Reading CSV files
- Handling missing values
- Removing duplicates
- Filtering rows
- Grouping data
- Aggregation

---

## 🧠 What to Build

### Project: Dirty Dataset Cleaner

Use a messy dataset such as **sales dataset**.

Tasks:

- remove missing values
- remove duplicate rows
- convert datatypes
- filter rows
- group by category

Analysis examples:

- Total sales by region
- Average sales per product
- Top selling products

Repository:

\`\`\`
pandas-data-cleaning-project
\`\`\`

---

# 4️⃣ Exploratory Data Analysis (EDA)

EDA helps you **understand data patterns before building models**.

---

## 🎥 How many videos to watch

Watch **3 videos**

Learning time: **6–8 hours**

---

## 🔎 What to search on YouTube

\`\`\`
exploratory data analysis python real dataset
eda python project walkthrough
\`\`\`

---

## 🎯 What to get perfect at

You should know how to:

- Inspect dataset structure
- Detect outliers
- Analyze distributions
- Find correlations
- Write insights from data

---

## 🧠 What to Build

### Project: Netflix Dataset Analysis

Questions:

- Which country produces most shows?
- Which genre is most common?
- Movies vs TV shows ratio
- Release trend by year

Write **10–15 insights**.

Repository:

\`\`\`
netflix-data-analysis
\`\`\`

---

# 5️⃣ Data Visualization

Visualization helps **explain data insights clearly**.

---

## 🎥 How many videos to watch

Watch **2–3 videos**

Learning time: **5 hours**

---

## 🔎 What to search on YouTube

\`\`\`
matplotlib tutorial for data science
seaborn plots explained
\`\`\`

---

## 🎯 What to get perfect at

Learn:

- Line plots
- Bar charts
- Histograms
- Scatter plots
- Heatmaps

---

## 🧠 What to Build

### Project: COVID Data Visualization

Build charts showing:

- daily cases trend
- top affected countries
- correlation heatmap
- case distribution

Repository:

\`\`\`
covid-data-visualization-dashboard
\`\`\`

---

# 6️⃣ Statistics for Machine Learning

Statistics helps understand **patterns and probabilities in data**.

---

## 🎥 How many videos to watch

Watch **2 videos**

Learning time: **4 hours**

---

## 🔎 What to search on YouTube

\`\`\`
statistics for machine learning intuitive
bias variance tradeoff visual explanation
\`\`\`

---

## 🎯 What to get perfect at

Learn:

- Mean / median
- Variance / std dev
- Probability
- Correlation
- Bias vs variance

---

## 🧠 What to Build

### Project: A/B Testing Simulation

Example:

Campaign A:

\`\`\`
120 / 1000
\`\`\`

Campaign B:

\`\`\`
150 / 1000
\`\`\`

Calculate:

- conversion rate
- statistical significance

Repository:

\`\`\`
ab-testing-simulation
\`\`\`

---

# 7️⃣ SQL

SQL is used to **query data from databases**.

---

## 🎥 How many videos to watch

Watch **3 tutorial videos**

Learning time: **6 hours**

---

## 🔎 What to search on YouTube

\`\`\`
sql for data science full tutorial
sql joins explained with examples
\`\`\`

---

## 🎯 What to get perfect at

Learn:

- SELECT queries
- WHERE filtering
- JOIN operations
- GROUP BY
- Aggregations

---

## 🧠 What to Build

### Project: E-commerce Data Analysis

Tables:

\`\`\`
customers
orders
products
\`\`\`

Queries:

- top selling products
- monthly revenue
- top customers

Repository:

\`\`\`
sql-ecommerce-analysis
\`\`\`

---

# 8️⃣ Core Machine Learning Algorithms

Now you will start **building machine learning models**.

---

## 🎥 How many videos to watch

Watch **3 videos**

Learning time: **8 hours**

---

## 🔎 What to search on YouTube

\`\`\`
machine learning with scikit learn tutorial
decision tree random forest sklearn tutorial
\`\`\`

---

## 🎯 What to get perfect at

Learn:

- Linear Regression
- Logistic Regression
- Decision Trees
- Random Forest
- Train-test split

---

## 🧠 What to Build

### Project: House Price Prediction

Dataset features:

\`\`\`
area
bedrooms
location
age
\`\`\`

Steps:

1 clean data  
2 split train/test  
3 train models  
4 compare performance

Repository:

\`\`\`
house-price-prediction-ml
\`\`\`
# 9️⃣ Feature Engineering

Feature Engineering means **improving the dataset so machine learning models perform better**.

Often a simple model with good features performs better than a complex model.

---

## 🎥 How many videos to watch

Watch **2–3 tutorial videos**

Learning time: **5–6 hours**

---

## 🔎 What to search on YouTube

Search these:

\`\`\`
feature engineering machine learning practical
categorical encoding machine learning
feature scaling normalization standardization
\`\`\`

---

## 🎯 What to get perfect at

You should clearly understand:

- One Hot Encoding
- Label Encoding
- Feature Scaling
- Normalization
- Standardization
- Removing irrelevant features
- Creating new features from existing data

Example:

\`\`\`
age → age_group
salary → salary_category
\`\`\`

---

## 🧠 What to Build

### Project: Customer Churn Prediction

Goal: Predict whether a customer will **leave a company service**.

Dataset example features:

\`\`\`
customer_age
monthly_charges
contract_type
internet_service
tenure
\`\`\`

Steps:

1 Clean dataset  
2 Encode categorical features  
3 Scale numerical features  
4 Train ML model  
5 Predict churn

Prediction output:

\`\`\`
Customer will leave → YES / NO
\`\`\`

Repository:

\`\`\`
customer-churn-prediction
\`\`\`

---

# 🔟 Model Evaluation & Hyperparameter Tuning

After training models you must **evaluate how good the model is**.

This step ensures models are **reliable and not overfitting**.

---

## 🎥 How many videos to watch

Watch **3 videos**

Learning time: **6 hours**

---

## 🔎 What to search on YouTube

\`\`\`
model evaluation metrics machine learning explained
gridsearchcv practical example sklearn
cross validation machine learning tutorial
\`\`\`

---

## 🎯 What to get perfect at

Understand these concepts clearly:

- Train Test Split
- Cross Validation
- Accuracy
- Precision
- Recall
- F1 Score
- Confusion Matrix
- GridSearchCV
- RandomizedSearchCV

You should know **when to use each metric**.

---

## 🧠 What to Build

### Project: Spam Email Classifier

Goal: Detect whether an email is spam.

Example email text:

\`\`\`
Congratulations! You won $1000.
\`\`\`

Model output:

\`\`\`
Spam
\`\`\`

Steps:

1 Text preprocessing  
2 Convert text to numerical vectors  
3 Train classification model  
4 Evaluate model performance  

Metrics to display:

\`\`\`
Accuracy
Precision
Recall
F1 Score
Confusion Matrix
\`\`\`

Repository:

\`\`\`
spam-email-classifier-ml
\`\`\`

---

# 1️⃣1️⃣ End-to-End Machine Learning Projects

Now you should start building **complete ML systems from start to finish**.

This includes:

- data cleaning
- feature engineering
- training models
- evaluating models

---

## 🎥 How many videos to watch

Watch **4 complete project walkthroughs**

Learning time: **10–12 hours**

---

## 🔎 What to search on YouTube

\`\`\`
end to end machine learning project python
machine learning project real world dataset
ml project from scratch deployment
complete machine learning project walkthrough
\`\`\`

---

## 🎯 What to get perfect at

You should learn how to:

- choose dataset
- clean data
- engineer features
- train multiple models
- evaluate models
- select best model

---

## 🧠 What to Build

Build **3–4 strong ML projects**

### Project 1

Loan Approval Prediction

Predict whether a bank should approve a loan.

---

### Project 2

Movie Recommendation System

Recommend movies based on user preferences.

Example output:

\`\`\`
Recommended Movies:
Inception
Interstellar
The Dark Knight
\`\`\`

---

### Project 3

Fraud Detection System

Detect suspicious transactions.

Example:

\`\`\`
Transaction amount: $5000
Prediction: Fraud
\`\`\`

---

### Project 4

Customer Segmentation

Cluster customers into groups using ML.

Example groups:

\`\`\`
High Value Customers
Regular Customers
Low Activity Customers
\`\`\`

Repositories:

\`\`\`
loan-approval-prediction
movie-recommendation-system
fraud-detection-ml
customer-segmentation
\`\`\`

---

# 1️⃣2️⃣ Model Deployment

Machine learning models become useful when **deployed as APIs**.

---

## 🎥 How many videos to watch

Watch **3 deployment tutorials**

Learning time: **5 hours**

---

## 🔎 What to search on YouTube

\`\`\`
deploy machine learning model using flask
fastapi machine learning api tutorial
postman api testing tutorial
\`\`\`

---

## 🎯 What to get perfect at

You should understand:

- Saving models
- Loading models
- Creating APIs
- Sending prediction requests

---

## 🧠 What to Build

### Project: ML Model API

Deploy the **House Price Prediction model**.

API input:

\`\`\`
area
rooms
location
\`\`\`

API output:

\`\`\`
Predicted Price: $350000
\`\`\`

Tools:

- FastAPI
- Flask
- Postman

Repository:

\`\`\`
ml-model-deployment-api
\`\`\`

---

# 1️⃣3️⃣ Git & GitHub

GitHub is where you **showcase your projects to recruiters**.

---

## 🎥 How many videos to watch

Watch **1 complete tutorial**

Learning time: **2 hours**

---

## 🔎 What to search on YouTube

\`\`\`
git and github tutorial for beginners full
\`\`\`

---

## 🎯 What to get perfect at

You should know how to:

- initialize git repository
- commit changes
- push code to GitHub
- create README files
- manage project versions

---

## 🧠 What to Build

Create a **Machine Learning Portfolio Repository**

Structure:

\`\`\`
ML-Portfolio
 ├ netflix-data-analysis
 ├ covid-data-visualization-dashboard
 ├ house-price-prediction-ml
 ├ customer-churn-prediction
 ├ spam-email-classifier-ml
 ├ loan-approval-prediction
 ├ fraud-detection-ml
 └ ml-model-deployment-api
\`\`\`

---

# 1️⃣4️⃣ Model Explainability

Machine learning models must be **interpretable**.

Explainability helps understand **why models make predictions**.

---

## 🎥 How many videos to watch

Watch **1 tutorial**

Learning time: **2 hours**

---

## 🔎 What to search on YouTube

\`\`\`
shap explainable ai tutorial
\`\`\`

---

## 🎯 What to get perfect at

Understand:

- Feature Importance
- SHAP values
- Model interpretation

---

## 🧠 What to Build

### Project

Explain the **Loan Prediction Model**.

Show:

\`\`\`
Most important features
Why prediction was made
\`\`\`

Example:

\`\`\`
Income → Strong influence
Credit Score → Medium influence
\`\`\`

Repository:

\`\`\`
loan-prediction-explainability
\`\`\`

---

# 1️⃣5️⃣ ML System Basics

In real companies ML models are **versioned and maintained**.

---

## 🎥 How many videos to watch

Watch **1 tutorial**

Learning time: **2 hours**

---

## 🔎 What to search on YouTube

\`\`\`
model versioning machine learning basics
\`\`\`

---

## 🎯 What to get perfect at

Understand:

- saving models
- loading models
- version tracking
- retraining models

---

## 🧠 What to Build

Create model versions:

\`\`\`
model_v1.pkl
model_v2.pkl
model_v3.pkl
\`\`\`

Track improvements.

Repository:

\`\`\`
ml-model-versioning-demo
\`\`\`

---

# 1️⃣6️⃣ Linux & CLI Basics

Many ML systems run on **Linux servers**.

You must know **basic terminal commands**.

---

## 🎥 How many videos to watch

Watch **1 tutorial**

Learning time: **2 hours**

---

## 🔎 What to search on YouTube

\`\`\`
linux command line tutorial for beginners
\`\`\`

---

## 🎯 What to get perfect at

Learn:

- navigating folders
- running python scripts
- installing packages
- basic commands

Examples:

\`\`\`
cd
ls
mkdir
pip install
python script.py
\`\`\`

---

## 🧠 What to Build

Run ML pipeline from terminal.

Example commands:

\`\`\`
python train_model.py
python predict.py
\`\`\`

Repository:

\`\`\`
ml-linux-cli-workflow
\`\`\`

---

# 🚀 Final Outcome

If you complete this roadmap fully you will have:

✔ 8–10 ML projects  
✔ 4 strong ML portfolio projects  
✔ deployed ML API  
✔ professional GitHub repository  

This is strong enough to start applying for:

- Machine Learning Intern
- Junior ML Engineer
- Data Scientist Intern
- Applied ML Engineer`;
