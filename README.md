# Ascender

[![Lint and test](https://github.com/cvpaperchallenge/Ascender/actions/workflows/lint-and-test.yaml/badge.svg)](https://github.com/cvpaperchallenge/Ascender/actions/workflows/lint-and-test.yaml)
[![MIT License](https://img.shields.io/github/license/cvpaperchallenge/Ascender?color=green)](LICENSE)

## About this repo
TBD

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

## Prerequisite

- docker
- docker-compose

### Install docker

```bash
$ sudo apt update
$ sudo apt install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
$ sudo apt update
$ sudo apt install docker-ce docker-ce-cli containerd.io
```

If `sudo docker run hello-world` works, installation succeeded.

### Install NVIDIA docker

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

### Install docker-compose
TBD

## How to start development
TBD

## Checklist before push
TBD