import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Switch to the Agg backend
plt.switch_backend('Agg')

# Load training data
train_data = pd.read_csv('train.csv')

print(train_data.head())

# Summary statistics
summary_stats = train_data.describe()
print(summary_stats)

# Check missing values
missing_values = train_data.isnull().sum()
print(missing_values)

# Visualizing the distribution
plt.figure(figsize=(8,6))
sns.countplot(x='Survived', data=train_data)
plt.title('Survival Distribution')
plt.savefig('survival_distribution.png')
plt.close()

# Visualize the distribution of passenger class
plt.figure(figsize=(8,6))
sns.countplot(x='Pclass', data=train_data)
plt.title('Passenger Distribution')
plt.savefig('passenger-distribution.png')
plt.close()

# Distribution of age
plt.figure(figsize=(8,6))
sns.histplot(train_data['Age'].dropna(), kde=True)
plt.title('Age Distribution')
plt.savefig('age-distribution.png')
plt.close()

# Survival rate visual
plt.figure(figsize=(8,6))
sns.barplot(x='Sex', y='Survived', data=train_data)
plt.title('Survival Rate by Gender')
plt.savefig('survival_rate(Gender).png')
plt.close()

# Survival rate by Passenger Class
plt.figure(figsize=(8,6))
sns.barplot(x='Pclass', y='Survived', data=train_data)
plt.title('Survival Rate by Passenger Class')
plt.savefig('survival_rate(Passenger-class).png')
plt.close()

# Missing values in 'Age', 'Embarked' and 'drop Cabin column'
train_data['Age'].fillna(train_data['Age'].median(), inplace=True)
train_data['Embarked'].fillna(train_data['Embarked'].mode()[0], inplace=True)
train_data.drop(columns=['Cabin'], inplace=True)

# Convert variables to Numerical
train_data['Sex'] = train_data['Sex'].map({'male': 0, 'female': 1})
train_data['Embarked'] = train_data['Embarked'].map({'C': 0, 'Q': 1, 'S': 2})

# Create a new feature 'FamilySize'
train_data['FamilySize'] = train_data['SibSp'] + train_data['Parch'] + 1

# Extract titles from 'Name'
train_data['Title'] = train_data['Name'].str.extract(r' ([A-Za-z]+)\.', expand=False)
# Replace rare titles with 'Rare'
train_data['Title'] = train_data['Title'].replace(['Lady', 'Countess', 'Capt', 'Col', 'Don', 'Dr', 'Major', 'Rev', 'Sir', 'Jonkheer', 'Dona'], 'Rare')
train_data['Title'] = train_data['Title'].replace('Mlle', 'Miss')
train_data['Title'] = train_data['Title'].replace('Ms', 'Miss')
train_data['Title'] = train_data['Title'].replace('Mme', 'Mrs')

# Map titles to numerical values
title_mapping = {"Mr": 1, "Miss": 2, "Mrs": 3, "Master": 4, "Rare": 5}
train_data['Title'] = train_data['Title'].map(title_mapping)
train_data['Title'].fillna(0, inplace=True)

# MODEL TRAINING
X = train_data.drop(columns=['PassengerId', 'Survived', 'Name', 'Ticket'])
y = train_data['Survived']

X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_val)
accuracy = accuracy_score(y_val, y_pred)
print(f"Validation Accuracy: {accuracy:.2f}")

# Make predictions on test data
test_data = pd.read_csv('test.csv')

test_data['Age'].fillna(test_data['Age'].median(), inplace=True)
test_data['Embarked'].fillna(test_data['Embarked'].mode()[0], inplace=True)
test_data['Fare'].fillna(test_data['Fare'].median(), inplace=True)
test_data.drop(columns=['Cabin'], inplace=True)
test_data['Sex'] = test_data['Sex'].map({'male': 0, 'female': 1})
test_data['Embarked'] = test_data['Embarked'].map({'C': 0, 'Q': 1, 'S': 2})
test_data['FamilySize'] = test_data['SibSp'] + test_data['Parch'] + 1
test_data['Title'] = test_data['Name'].str.extract(r' ([A-Za-z]+)\.', expand=False)
test_data['Title'] = test_data['Title'].replace(['Lady', 'Countess', 'Capt', 'Col', 'Don', 'Dr', 'Major', 'Rev', 'Sir', 'Jonkheer', 'Dona'], 'Rare')
test_data['Title'] = test_data['Title'].replace('Mlle', 'Miss')
test_data['Title'] = test_data['Title'].replace('Ms', 'Miss')
test_data['Title'] = test_data['Title'].replace('Mme', 'Mrs')
test_data['Title'] = test_data['Title'].map(title_mapping)
test_data['Title'].fillna(0, inplace=True)

X_test = test_data.drop(columns=['PassengerId', 'Name', 'Ticket'])
test_predictions = model.predict(X_test)

# Submission file
submission = pd.DataFrame({
    'PassengerId': test_data['PassengerId'],
    'Survived': test_predictions
})

submission.to_csv('submission.csv', index=False)
