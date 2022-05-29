ARG BASE_IMAGE=nvidia/cuda:11.0-devel-ubuntu20.04
FROM ${BASE_IMAGE}

ARG PROJECT_NAME=ascender
ARG USER_NAME=challenger
ARG PYTHON_VERSION=3.8
ARG APPLICATION_DIRECTORY=/home/${USER_NAME}/${PROJECT_NAME}

ENV DEBIAN_FRONTEND="noninteractive" \
    LC_ALL="C.UTF-8" \
    LANG="C.UTF-8" \
    PYTHONPATH=${APPLICATION_DIRECTORY}

# Due to Nvidia's GPG repository key update, old key should be removed here.
# NVIDIA blog: https://developer.nvidia.com/blog/updating-the-cuda-linux-gpg-repository-key/
# Reference: https://github.com/NVIDIA/nvidia-docker/issues/1631#issuecomment-1112828208
# After the base image is updated, following block will be able to remove.
# NOTE: If you want to chose not default base image, you might need to update DISTRO augment part.
ARG DISTRO=ubuntu2004
RUN rm /etc/apt/sources.list.d/cuda.list | true
RUN rm /etc/apt/sources.list.d/nvidia-ml.list | true
RUN apt-key del 7fa2af80 | true
RUN apt-key del F796ECB0 | true
RUN apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/${DISTRO}/x86_64/3bf863cc.pub | true
RUN apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/machine-learning/repos/${DISTRO}/x86_64/7fa2af80.pub | true

# Following is needed to install python 3.7
RUN apt update && apt install --no-install-recommends -y software-properties-common 
RUN add-apt-repository ppa:deadsnakes/ppa

RUN apt update && apt install --no-install-recommends -y \
    git curl make ssh openssh-client \
    python${PYTHON_VERSION} python3-pip python-is-python3
    
# Following is needed to swtich default python3 version
# For detail, please check following link https://unix.stackexchange.com/questions/410579/change-the-python3-default-version-in-ubuntu
RUN update-alternatives --install /usr/bin/python3 python3 /usr/bin/python${PYTHON_VERSION} 1 \
    && update-alternatives --set python3 /usr/bin/python${PYTHON_VERSION} \
    && pip3 install poetry

# Add user. Without this, following process is executed as admin. 
RUN useradd -ms /bin/sh ${USER_NAME}
USER ${USER_NAME}

WORKDIR ${APPLICATION_DIRECTORY}
# Create virtual environments inside of project.
RUN poetry config virtualenvs.in-project true
