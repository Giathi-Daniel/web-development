# Installing virtual environment
```
pip install virtualenv
```

**check version**
```
virtualenv --version
```

- After successful installation of virtualenv, create a virtual environment using the desired name
	- virtualenv virtualenvironment_name
	-**example**: virtualenv Mydataanlyticenv

**activate virtual environment**
- Windows syntax
```
virtualenvname\scripts\activate
```

- Linux/mac
```
Source Virtualenvname/bin/activate
```

**example in windows**
```
Mydataanalyticenv\scripts\activate
```

**Once activated, you can install the necessary libraries and modules for your project.**

# Third Party Libraries
- pip: install packages as they are **pip install the_package_name**
- Virtualenv: used for isolating Python package installations from each other.
- BigQuery: Developed by Google, BigQuery is a Cloud service library that is useful with RESTful APIs.
- Kafka: This is a publish-subscribe messaging system that receives and stores logs as packages in partitioned spaces.

# Python Standard Library
- TensorFlow: Google's open-source library enables high-level computations and tensor operations
- Matpltlib: An open-source library for plotting numerical data, including pie charts, histograms, and scatterplots, making it essential for data analysis.
- Pandas: It is an open-source library for flexible data analysis and manipulation.
- Numpy: Stands for "Numerical Python" and supports multi-dimensional data operations.
- SciPy: SciPy, or "Scientific Python," facilitates high-level scientific computations using Numpy.
- Scrapy: Scrapy is an open-source library for fast web crawling and data extraction.
- Scikit-learn: Scikit-learn is an open-source library for machine learning with various algorithms.
- PyGame: PyGame provides an interface for developing video games using Python and SDL.
- PyTorch: PyTorch optimizes tensor computations with strong GPU acceleration and rich APIs.
- PyBrain: PyBrain is an open-source library for beginners in machine learning and AI.