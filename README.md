# Ascender

![python versions](https://img.shields.io/badge/python-3.8%20%7C%203.9-blue)
[![tests](https://github.com/cvpaperchallenge/Ascender/actions/workflows/lint-and-test.yaml/badge.svg)](https://github.com/cvpaperchallenge/Ascender/actions/workflows/lint-and-test.yaml)
[![MIT License](https://img.shields.io/github/license/cvpaperchallenge/Ascender?color=green)](LICENSE)

## What is Ascender?

Ascender (Accelerator of SCiENtific DEvelopment and Research) is a [GitHub repository template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) for research projects using Python as a developing language. The following features are pre-implemented to accelerate your development:


- **Container**: Use of [Docker](https://www.docker.com/) reduces development environment dependencies and improves code portability.
- **Virtual environment / package management**: Package management using [Poetry](https://python-poetry.org/) improves reproducibility of the same environment.
- **Coding style**: Automatic code style formatting using [Black](https://github.com/psf/black), [Flake8](https://github.com/pycqa/flake8), and [isort](https://github.com/PyCQA/isort).
- **Static type check**: Static type checking with [Mypy](https://github.com/python/mypy) to assist in finding bugs.
- **pytest**: Easily add test code using [pytest](https://github.com/pytest-dev/pytest).
- **GitHub features**: Some useful features, [workflow](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions) for style check and test for pull request, [issue template](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository), etc. are pre-implemented.

Please check [the slide format resources about Ascender (Japanese)](https://cvpaperchallenge.github.io/Britannica/ascender/ja) too.

## Project Organization

```
    ├── .github/           <- Settings for GitHub.
    │
    ├── data/              <- Datasets.
    │
    ├── environments/       <- Provision depends on environments.
    │
    ├── models/            <- Pretrained and serialized models.
    │
    ├── notebooks/         <- Jupyter notebooks.
    │
    ├── outputs/           <- Outputs.
    │
    ├── src/               <- Source code. This sould be Python module.
    │
    ├── tests/             <- Test codes.
    │
    ├── .flake8            <- Setting file for Flake8.
    ├── .dockerignore
    ├── .gitignore
    ├── LICENSE
    ├── Makefile           <- Makefile used as task runner. 
    ├── poetry.lock        <- Lock file. DON'T edit this file manually.
    ├── poetry.toml        <- Setting file for Poetry.
    ├── pyproject.toml     <- Setting file for Project. (Poetry, Black, isort, Mypy)
    └── README.md          <- The top-level README for developers.

```

## Prerequisites

- [Docker](https://www.docker.com/) 
- [Docker Compose](https://github.com/docker/compose)
- (Optional) [NVIDIA Container Toolkit (nvidia-docker2)](https://github.com/NVIDIA/nvidia-docker)

**NOTE**: Example codes in the README.md are written for `Docker Compose v2`. However, Ascender also should work under `Docker Compose v1`. If you are using `Docker Compose v1`, just replace `docker compose` in the example code by `docker-compose`.

## Prerequisites installation

Here, we show example prerequisites installation codes for Ubuntu. If prerequisites  are already installed your environment, please skip this section. If you want to install in another environment, please follow the officail documentations.

- Docker and Docker Compose: [Install Docker Engine](https://docs.docker.com/engine/install/)
- NVIDIA Container Toolkit (nvidia-docker2): [Installation Guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker)


### Install Docker and Docker Compose

```bash
# Set up the repository
$ sudo apt update
$ sudo apt install ca-certificates curl gnupg lsb-release
$ sudo mkdir -p /etc/apt/keyrings
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
$ echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker and Docker Compose
$ sudo apt update
$ sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

If `sudo docker run hello-world` works, installation succeeded.

### (Optional) NVIDIA Container Toolkit

If you want to use GPU in Ascender, please install NVIDIA Container Toolkit (nvidia-docker2) too. NVIDIA Container Toolkit also requires some prerequisites to install. So please check thier [official documentation](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#pre-requisites) first.

```bash
$ distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
      && curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
      && curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list | \
            sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
            sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

$ sudo apt update
$ sudo apt install -y nvidia-docker2
$ sudo systemctl restart docker
```

If `sudo docker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi` works, installation succeeded.

## Quick start

Here, we explain how to start using Ascender. Please refer to [this slide (Japanese)](https://cvpaperchallenge.github.io/Britannica/ascender/ja) for detailed information.

### Create GitHub repo from Ascender

Fisrt of all, you need to create your own GitHub repo from Ascender as follows:

- Visit [GitHub repo page of Ascender](https://github.com/cvpaperchallenge/Ascender).
- Press ["Use this template"](https://github.com/cvpaperchallenge/Ascender/generate) button in the upper right part of the page.
- Fill in the items on the page, and press "Create repository from template" button.

Now, a new repo should be created from Ascender in your GitHub account.

### Start development

```bash
# Clone repo
$ git clone git@github.com:cvpaperchallenge/<YOUR_REPO_NAME>.git
$ cd <YOUR_REPO_NAME>

# Build Docker image and run container
$ cd environments/gpu  # if you want to use only cpu, `cd environments/cpu` 
$ sudo docker compose up -d

# Run bash inside of container (jump into contaienr)
$ sudo docker compose exec core bash

# Create virtual environment and install dependent packages by Poetry
$ poetry install
```

Now, you are ready to start development with Ascender.

### Stop development

```bash
# Stop container
$ cd environments/gpu  # or `cd environments/cpu` 
$ sudo dokcer compose stop
```

## FAQ

### Use Ascender without Docker

We recommend using Ascender with Docker as described above. However, you might not be able to install Docker in your development environment due to permission issues or etc.

In such cases, Ascender can be used without Docker. To do that, please install Poetry in your computer, and follow the steps describing in "Start development" section with ignoring the steps related to Docker.

```bash
# Install Poetry
$ pip3 install poetry

# Clone repo
$ git clone git@github.com:<YOUR_USER_NAME>/<YOUR_REPO_NAME>.git
$ cd <YOUR_REPO_NAME>

# Create virtual environment and install dependent packages by Poetry
$ poetry install
```

NOTE: CI job (GitHub Actions workflow) of Ascender is using Dockerfile. Therefore, using Ascender without Docker might raise error at CI job. In that case, please modify the Dockerfile appropriately or delete the CI job (`.github/workflows/lint-and-test.yaml`).

### Permission error is raised when execute `poetry install`.

Sometime `poetry install` might rise permission error like following:

```bash
$ poetry install
...

virtualenv: error: argument dest: the destination . is not write-able at /home/challenger/ascender
```

In that case, please check UID (user id) and GID (group id) at your local PC by following:

```bash
$ id -u $USER  # check UID
$ id -g $USER  # check GID
```

In Ascender, default value of both is `1000`. If UID or GID of your local PC is not `1000`, you need to modify the value of `UID` or `GID` inside of `docker-compose.yaml` to align your local PC (please edit their values from `1000`). Or if environmental variables `HOST_UID` and `HOST_GID` is defined at host PC, Ascender uses these values.

### Compatibility issue between PyTorch and Poetry

NOTE: Now poetry 1.2 is used in Ascender. So this issue is expected to be solved.

Currently, there is a compatibility issue between PyTorch and Poetry. This issue is being worked on by the Poetry community and is expected to be resolved in 1.2.0. (You can check pre-release of 1.2.0 from [here](https://github.com/python-poetry/poetry/releases/tag/1.2.0b3).) 

We plan to incorporate Poetry 1.2.0 into Ascender immediately after its release. In the meantime, please consider using the workaround described in [this issue](https://github.com/python-poetry/poetry/issues/4231).

**Some related GitHub issues**
- https://github.com/python-poetry/poetry/issues/2339
- https://github.com/python-poetry/poetry/issues/2543
- https://github.com/python-poetry/poetry/issues/2613
- https://github.com/python-poetry/poetry/issues/3855
- https://github.com/python-poetry/poetry/issues/4231
- https://github.com/python-poetry/poetry/issues/4704

### Change the Python version to run CI jobs

By default, CI job (GitHub Actions workflow) of Ascender is run against Python 3.8 and 3.9. If you want to change the target Python version, please modify [the matrix part of `.github/workflows/lint-and-test.yaml`](https://github.com/cvpaperchallenge/Ascender/blob/master/.github/workflows/lint-and-test.yaml#L18).
