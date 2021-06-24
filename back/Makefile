PYTHON_VERSION := 3.8.5
PROJECT_NAME := painel
VENV_NAME := $(PROJECT_NAME)-$(PYTHON_VERSION)
DATABASE_PASS := postgres


create-venv: .create-venv setup

.create-venv: 
	pyenv install -s $(PYTHON_VERSION)
	pyenv uninstall -f $(VENV_NAME)
	pyenv virtualenv $(PYTHON_VERSION) $(VENV_NAME)
	pyenv local $(VENV_NAME)


.pip:
	pip install pip --upgrade

setup: .pip
	pip install -U setuptools
	pip install -r requirements.txt

run-postgres:
	docker start ceotech-postgres 2>/dev/null || docker run --name covid-postgres -p 5432:5432 -e POSTGRES_PASSWORD='$(DATABASE_PASS)' -d postgres:10-alpine
