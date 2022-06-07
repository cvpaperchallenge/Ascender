# Ascender

![python versions](https://img.shields.io/badge/python-3.8%20%7C%203.9-blue)
[![tests](https://github.com/cvpaperchallenge/Ascender/actions/workflows/lint-and-test.yaml/badge.svg)](https://github.com/cvpaperchallenge/Ascender/actions/workflows/lint-and-test.yaml)
[![MIT License](https://img.shields.io/github/license/cvpaperchallenge/Ascender?color=green)](LICENSE)

## What is Ascender?

Ascender (Accelerator of SCiENtific DEvelopment and Research) is a [Github repository template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) for research projects using Python as a developing language. The following features are pre-implemented to accelerate your development:


- **Container**: Use of [Docker](https://www.docker.com/) reduces development environment dependencies and improves code portability.
- **Virtual environment / package management**: Package management using [Poetry](https://python-poetry.org/) improves reproducibility of the same environment.
- **Coding style**: Automatic code style formatting using [Black](https://github.com/psf/black), [Flake8](https://github.com/pycqa/flake8), and [isort](https://github.com/PyCQA/isort).
- **Static type check**: Static type checking with [Mypy](https://github.com/python/mypy) to assist in finding bugs.
- **pytest**: Easily add test code using [pytest](https://github.com/pytest-dev/pytest).
- **GitHub features**: Some useful features, [workflow](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions) for style check and test for pull request, [issue template](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository), etc. are pre-implemented.

## Project Organization

```
    ├── .github/           <- Settings for github.
    │
    ├── data/              <- Datasets.
    │
    ├── environmtns/       <- Provision depends on environments.
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
    ├── .dockerignore
    ├── .gitignore
    ├── LICENSE
    ├── Makefile           <- Makefile used as task runner. 
    ├── poetry.lock        <- Lock file. DON'T edit this file manually.  
    ├── pyproject.toml     <- Setting file.
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

## Start development using Ascender
TBD

## Checklist before push
TBD

## FQA
TBD