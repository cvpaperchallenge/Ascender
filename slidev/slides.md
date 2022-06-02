---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Ascender
  Project template for XCCV group of cvpaper.challenge.

  Available from [Github](https://github.com/cvpaperchallenge/Ascender)
# persist drawings in exports and build
drawings:
  persist: false
---

# Ascender

Accelerator of SCiENtific DEvelopment and Research

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    How to accelerate your project <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/cvpaperchallenge/Ascender" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: cover
---

# Ascender

---

# Ascender

### What is it?

- 主にPythonを開発言語として使用した研究プロジェクト向けの[Githubのリポジトリテンプレート](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository).

- 開発時に有用な機能を多数サポート.
  - コンテナ: [Docker](https://www.docker.com/)を使用することで開発環境依存を減らし, コードの移植性を向上.
  - 仮想環境構築/パッケージ管理: [Poetry](https://python-poetry.org/)を使用したパッケージ管理により, 同一環境の再現性を向上.
  - コードスタイル: [Black](https://github.com/psf/black), [Flake8](https://github.com/pycqa/flake8), [isort](https://github.com/PyCQA/isort)を使用してコードスタイルを統一.
  - 静的型チェック: [Mypy](https://github.com/python/mypy)による静的型チェックによりコードの信頼性を向上.
  - テスト: [pytest](https://github.com/pytest-dev/pytest/)を使用したテストコードを簡単に追加可能.
  - GitHub関連機能: [Pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)時のスタイル確認・テストの[workflow](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)や[issueテンプレート](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)等を実装済.

- https://github.com/cvpaperchallenge/Ascender からアクセス可能.

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 75%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: image-right
image: /ascender-github-root.png
---

# Ascender

### How to use it?

以下の手順でAscenderをテンプレートとしてGitHubリポジトリが作成可能.

- [AscenderのGitHubリポジトリ](https://github.com/cvpaperchallenge/Ascender)にアクセス.
- "Use this template"ボタンをクリック.
- 作成するリポジトリの情報を入力し, "Create repository from template"をクリック.

テンプレートからリポジトリを作成する方法は[Githubのドキュメント](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)にも説明がある.

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: image-right
image: /ascender-github-root-use-this-template.png
---

# Ascender

### How to use it?

以下の手順でAscenderをテンプレートとしてGitHubリポジトリが作成可能.

- [AscenderのGitHubリポジトリ](https://github.com/cvpaperchallenge/Ascender)にアクセス.
- "Use this template"ボタンをクリック.
- 作成するリポジトリの情報を入力し, "Create repository from template"をクリック.

テンプレートからリポジトリを作成する方法は[Githubのドキュメント](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)にも説明がある.

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: image-right
image: /ascender-github-create-from-template.png
---

# Ascender

### How to use it?

以下の手順でAscenderをテンプレートとしてGitHubリポジトリが作成可能.

- [AscenderのGitHubリポジトリ](https://github.com/cvpaperchallenge/Ascender)にアクセス.
- "Use this template"ボタンをクリック.
- 作成するリポジトリの情報を入力し, "Create repository from template"をクリック.

テンプレートからリポジトリを作成する方法は[Githubのドキュメント](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)にも説明がある.

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Ascender

### How to use it?

**Directory structure**

```shell {all|9|all}
$ tree -L 1 --dirsfirst  # カレントディレクトリ下のディレクトリとファイルを, 1階層の深さだけ, ディレクトリから先に表示するコマンド.

.
├── data           # <- データセットを格納するためのディレクトリ. 
├── environments   # <- Docker関連のファイルを格納するディレクトリ.
├── models         # <- 学習済みのMLモデル等を格納するためのディレクトリ.
├── notebooks      # <- Jupyter Notebookを格納するためのディレクトリ. 
├── outputs        # <- コード実行時の出力を格納するためのディレクトリ. 
├── slidev         # <- この資料を作成しているSlidevのためのディレクトリ. 必要なければ削除して問題ありません.
├── src            # <- メインの開発物を格納するディレクトリ. このディレクトリ下がPythonパッケージとなることを想定しています.
├── tests          # <- pytestのテストを格納するディレクトリ. 全てのテストはこのディレクトリ下に追加して下さい.
├── LICENSE        # <- ライセンス情報を記載するファイル.
├── Makefile       # <- タスクランナーとして使用しているMakeの設定ファイル. 頻出のタスクを短いコマンドで実行出来るようにしています.
├── poetry.lock    # <- Poetryが自動変更するファイル. IMPORTANT: 直接編集しないで下さい!
├── pyproject.toml # <- Projectの設定を記載するファイル. Poetry, Black, Flake8, isort, Mypy等の設定が記載されています.
└── README.md      # <- Ascenderについての基本的な説明が記載されているファイル.
```

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 75%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
---

<template v-slot:default>
<div class="mr-4">
<!-- I want to indent div tag part but if indent it, code block navigation doesn't work. -->

# Ascender

### How to use it?

**Start development**

```shell {all}
# cpu環境の場合は`cd environments/cpu`
$ cd environments/gpu

# Dockerfileからイメージをビルドし, 
# ビルドされたイメージからコンテナを作成. 
# dオプションをつけるとコンテナをバックグラウンドで実行.
$ sudo docker compose up -d

# コンテナ内でbashを実行(コンテナ内に入る).
$ sudo docker compose exec core bash

# Poetryで仮想環境を構築し, 依存パッケージをインストール.
$ poetry install
```

</div>
</template>
<template v-slot:right>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

- 初回の実行時は`sudo docker compose up -d`に時間がかかる.

- 環境によっては`docker`の実行に`sudo`が必要ない場合がある.

- `poetry install`は初回のみ実行すれば良い.（`Poetry`の使い方については後述.）

</template>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
---

<template v-slot:default>
<div class="mr-4">
<!-- I want to indent div tag part but if indent it, code block navigation doesn't work. -->

# Ascender

### How to use it?

**During development**

```shell {all}
# Poetryを使用して新しいパッケージを仮想環境にインストール.
$ poetry add torch

# 仮想環境内でコマンドを実行するときは`poetry run`を使用. 
# 例. 仮想環境内でPythonのインタラクティブシェルを起動.
$ poetry run python3

# Makefile内に頻出するタスクの短縮コマンドを定義.
# `src`と`test`下のファイルのコードスタイルを自動整形.
$ make format
# `src`と`test`下のファイルのコードスタイルチェックと
# 静的型チェックを行い, pytestでテストコードを実行.
$ make test-all
```

</div>
</template>
<template v-slot:right>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

- 開発時はコンテナ内に`Poetry`が作成した仮想環境を使用.（`Poetry`の使い方については後述.）

- `Makefile`をタスクランナーと使用し, 頻出するタスクを`make`で簡単に実行可能.

- GithubでPull Requestを作成時にスタイルチェック, 静的型チェック, テストコード実行を行うCI用のworkflowも実装済.

</template>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
---

<template v-slot:default>
<div class="mr-4">
<!-- I want to indent div tag part but if indent it, code block navigation doesn't work. -->

# Ascender

### How to use it?

**Stop development**

```shell {all}
# cpu環境の場合は`cd environments/cpu`
$ cd environments/gpu

# コンテナを停止.
$ sudo dokcer compose stop

# もしコンテナを削除したい場合は停止と削除を一度に行うことも可能.
$ sudo docker compose down
```

</div>
</template>
<template v-slot:right>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

- 基本的にコンテナをバックグラウンドで実行し続けていても問題無いが, コンテナを停止したいときは`docker compose stop`を使用. 再度立ち上げるときは"Start development"の処理を繰り返せば良い.

- `docker compose down`を使用するとコンテナを削除可能.

</template>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Off-topic

### Terminology: Python module / package / library

- [モジュール (module) ](https://docs.python.org/3.10/tutorial/modules.html#modules)とは`.py`ファイルのこと.

- [パッケージ (package) ](https://docs.python.org/3.10/tutorial/modules.html#packages)とはモジュールを構造化する手段. 平たく言うと`__init__.py`ファイルと`.py`ファイルを含んだディレクトリのこと. パッケージはその中に下位のパッケージを含むこともある.

- ライブラリ (library) の定義についてはPythonの公式ドキュメントには記載が無いと思うのですが, PyPi等に公開されているパッケージ, もしくはパッケージの集合を意味することが多い.

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 75%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: cover
---

# Poetry

---
layout: image-right
image: /poetry-hp.png
---

# Poetry

### What is it?

Pythonパッケージの依存関係管理, パッケージ作成を行うためのツール.

- 仮想環境の構築
- パッケージの依存関係管理
- 作成したパッケージのPyPIへのパブリッシュ

などが出来る.

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Poetry

### How it work?

- 2つの重要なファイル:

  - `pyproject.toml`:（制約）ユーザーが`poetry add`コマンド等によって変更を行うファイル. インストールしたいパッケージのバージョンに対する制約が記載される.

  - `poetry.lock`:（状態）Poetryが自動変更するファイル. `pyproject.toml`に記載されているバージョン制約を元に, 実際にインストールしたパッケージの情報と, 依存パッケージの情報が記載される.

- Poetryはパッケージをインストール・アップデートするとき, 下記の1.と2.を両方満たすバージョンが存在するかを確認し, 見つかれば実行する.（本スライドでは, 便宜上1.と2.を合わせて**更新可能要件**と表現する.）

  1. **全てのパッケージが`pyproject.toml`に記載されたバージョン制約を満たす**

  1. **既にインストールされているパッケージと依存パッケージの競合がない**

- `poetry.lock`ファイルを含めてgithub等で共有することで, チーム間で同じパッケージの環境を共有することが出来る.

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 75%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
---

<template v-slot:default>
<div class="mr-4">
<!-- I want to indent div tag part but if indent it, code block navigation doesn't work. -->

# Poetry

### Frequently used commands

**[install](https://python-poetry.org/docs/cli/#install)**

```shell {all|1|11-12|17|all}
$ ls -1

LICENSE
Makefile
README.md
data
environments
models
notebooks
outputs
poetry.lock
pyproject.toml
slidev
src
tests

$ poetry install
```

</div>
</template>
<template v-slot:right>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

- `pyproject.toml`や`poetry.lock`を参照して仮想環境の構築やパッケージのインストールを行う.

- configの[`virtualenvs.in-project`](https://python-poetry.org/docs/configuration/#virtualenvsin-project)が`True`になっているとプロジェクトのルートに仮想環境のためのディレクトリ`.venv`を作成する. (Ascenderでは`Dockerfile`の最後のステップでこの値を`True`としている.)

</template>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
---

<template v-slot:default>
<div class="mr-4">
<!-- I want to indent div tag part but if indent it, code block navigation doesn't work. -->

# Poetry

### Frequently used commands

**[add](https://python-poetry.org/docs/cli/#add)**

```shell {all|1-3|5-7|9-11|13-15|17-19|all}
# numpyの最新のバージョンが更新可能要件を満たすかを確認し, 
# もし満たしていればインストールする.
$ poetry add numpy

# numpyのx.y以下のバージョンで更新可能要件を満たすバージョンを
# 順次探して, もし見つかればインストールする.
$ poetry add "numpy<=x.y"

# (Caret記法) x.y.z以上, x+1.0.0未満（厳密には正確では無い）の
# 範囲でバージョンを順次探して, もし見つかればインストールする.
$ poetry add "numpy^x.y.z"

# cvpaperchallenge/melonのdevelopブランチのインストールを
# 試みる.
$ poetry add git@github.com:cvpaperchallenge/melon.git#develop

# ローカルディレクトリ./my-package/下のインストールを試みる.
$ poetry add ./my-package/
```

</div>
</template>
<template v-slot:right>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

- 更新可能要件を満たすバージョンが見つかれば, パッケージの追加を行う. (見つからなかった場合は`SolverProblemError`になる.)

- パッケージであればgithubの特定のブランチやローカルディレクトリ/ファイルもインストール出来る.

- 独特なバージョン指定の記法があるので, 少し覚える必要がある(後述する).

- 便利な一方で, 恐らく`poetry`ユーザーが一番エラーで躓くコマンドなので, 忍耐を持って使う必要がある. (エラーが出た場合の対処方は後述する.)

</template>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
---

<template v-slot:default>
<div class="mr-4">
<!-- I want to indent div tag part but if indent it, code block navigation doesn't work. -->

# Poetry

### Frequently used commands

**[update](https://python-poetry.org/docs/cli/#update)**

```shell {all|1-3|5-7|all}
# 更新可能要件を満たしているパッケージを全てアップデートする.
$ poetry update

# 特定のパッケージのみに対して使用することも可能.
$ poetry update numpy
```

</div>
</template>
<template v-slot:right>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

- 更新可能要件を満たしていれば, パッケージのアップデートを行う.

- アップデート可能なパッケージの一覧は後述の`poetry show --latest`などで一覧出来る.

- `pyproject.toml`に記載されているバージョン制約以上のアップデートを行いたい場合は`poetry add`を使用して再度パッケージの追加を行う.

</template>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
---

<template v-slot:default>
<div class="mr-4">
<!-- I want to indent div tag part but if indent it, code block navigation doesn't work. -->

# Poetry

### Frequently used commands

**[remove](https://python-poetry.org/docs/cli#remove)**

```shell {all}
# numpyをアンインストールする.
$ poetry remove numpy
```

</div>
</template>
<template v-slot:right>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

- `poetry remove`が実行されると, `pyproject.toml`に記載されている対象のパッケージ制約の情報が削除される.

- 対象のパッケージに依存している他のパッケージが無ければパッケージをアンインストールする.

</template>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
---

<template v-slot:default>
<div class="mr-4">
<!-- I want to indent div tag part but if indent it, code block navigation doesn't work. -->

# Poetry

### Frequently used commands

**[run](https://python-poetry.org/docs/cli/#run)**

```shell {all|1-2|4-5|all}
# poetryの作成した仮想環境内でPython3を実行します.
$ poetry run python3

# poetryの作成した仮想環境内でblackをsrcディレクトリに適用する.
$ poetry run black src
```

</div>
</template>
<template v-slot:right>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

- Poetryの仮想環境内でコマンドを実行する. Poetryでインストールしたパッケージを使用するためにはpoetryの仮想環境内でコマンドを実行する必要がある.

- 「Poetryでパッケージをインストールしたのに, それが見つからないと怒られます.」という場合は大体この`poetry run`をつけ忘れていることが多い.

- その都度`poetry run`をつけるのが面倒という方は[`poetry shell`](https://python-poetry.org/docs/cli/#shell)コマンドを使って仮想環境の中でshellを立ち上げることも出来る.

</template>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
---

<template v-slot:default>
<div class="mr-4">
<!-- I want to indent div tag part but if indent it, code block navigation doesn't work. -->

# Poetry

### Frequently used commands

**[show](https://python-poetry.org/docs/cli/#show)**

```shell {all|1-2|4-5|7-8|all}
# 現在インストールされているパッケージの一覧を表示する.
$ poetry show

# パッケージの依存関係をツリーとして表示する.
$ poetry show --tree

# パッケージの最新のバージョンを表示する.
$ poetry show --latest
```

</div>
</template>
<template v-slot:right>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

- Poetryでインストールしたパッケージ様々な情報を表示する.

- 特に`poetry show --latest`は`poetry update`と組み合わせて使用すると便利.

</template>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Poetry

### Dependency specification

**[Semantic versioning](https://semver.org/)**

- ソフトウェアのバージョンを`x.y.z`の形で指定する.

- `x`はメジャーバージョンと呼ばれ, APIの変更に互換性のない場合にインクリメントする.

- `y`はマイナーバージョンと呼ばれ, 後方互換性があり機能性を追加した場合にインクリメントする.

- `z`はパッチバージョンと呼ばれ, 後方互換性を伴うバグ修正をした場合にインクリメントする.

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 75%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Poetry

### Dependency specification

**Some examples**

```shell {all|1-3|4-10|11-13|14-16|all}
# 最新バージョンのnumpyのインストールを試みる. `poetry add numpy` と同じ挙動.
$ poetry add numpy@latest

# 等号や不等号を使ってバージョン制約の指定が可能. ""をつけないと正しく動作しないので注意.
$ poetry add "numpy==1.21.0"
$ poetry add "numpy>=1.21.0"
$ poetry add "numpy<=1.21.0"
$ poetry add "numpy>1.21.0"
$ poetry add "numpy<1.21.0"

# 複数組み合わせて指定することも可能.
$ poetry add "numpy>=1.21.0,<1.22.4"

# Poetry特有の記法もある (後述).
$ poetry add "numpy^1.21.0"
$ poetry add "numpy~1.21.0"
```

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 75%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Poetry

### Dependency specification

**[Caret requirements](https://python-poetry.org/docs/dependency-specification/#caret-requirements)**

- `^`を用いてバージョン制約を記述する.

- ゼロでない再左の数字を変更しない範囲を表す.

| 例 | 表す範囲 |
| --- | --- |
| `^1.2.3` | `>=1.2.3,<2.0.0` |
| `^1.2`   | `>=1.2.0,<2.0.0` |
| `^1`     | `>=1.0.0,<2.0.0` |
| `^0.2.3` | `>=0.2.3,<0.3.0` |
| `^0.0.3` | `>=0.0.3,<0.0.4` |

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 75%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Poetry

### Dependency specification

**[Tilde requirements](https://python-poetry.org/docs/dependency-specification/#tilde-requirements)**

- `~`を用いてバージョン制約を記述する.

- 形式によって意味が異なる.

  - `~x.y.z`または`~x.y`の形式のときパッチバージョンの変更の範囲を表す.
  - `~x`の形式のときマイナーバージョンの変更の範囲を表す.

| 例 | 表す範囲 |
| --- | --- |
| `~1.2.3` | `>=1.2.3,<1.3.0` |
| `~1.2`   | `>=1.2.0,<1.3.0` |
| `~1`     | `>=1.0.0,<2.0.0` |

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 75%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
---

<template v-slot:default>
<div class="mr-4">
<!-- I want to indent div tag part but if indent it, code block navigation doesn't work. -->

# Poetry

### Frequently faced Error

**SolverProblemError**

```shell {all|1-3|8-15|all}
# AWSに関連する２つのパッケージのインストールを試みる
$ poetry add "boto3==1.16.43"
$ poetry add "s3fs^2022.5.0"

Updating dependencies
Resolving dependencies... (0.4s)

  SolverProblemError

  (途中略)
  Thus, s3fs (>=2022.5.0,<2023.0.0) requires botocore (>=1.24.21,<1.24.22).
  And because boto3 (1.16.43) depends on botocore (>=1.19.43,<1.20.0), s3fs (>=2022.5.0,<2023.0.0) is incompatible with boto3 (1.16.43).
  So, because ascender depends on both boto3 (1.16.43) and s3fs (^2022.5.0), version solving failed.
```

</div>
</template>
<template v-slot:right>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

- `s3fs`は`botocore(>=1.24.21,<1.24.22)`に, `boto3`は`botocore (>=1.19.43,<1.20.0)`にそれぞれ依存しており, 依存パッケージが競合している. これは, 更新可能要件の2.を満たしていないためSolverProblemErrorが発生する.

- `s3fs`と`boto3`を両方インストールするにはバージョン制約を調整して, `botocore`の競合が発生しないようにする必要がある.

</template>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
---

<template v-slot:default>
<div class="mr-4">
<!-- I want to indent div tag part but if indent it, code block navigation doesn't work. -->

# Poetry

### Frequently faced Error

**SolverProblemError**

```shell {all|1-3|13|all}
# AWSに関連する２つのパッケージのインストールを試みる
$ poetry add "boto3==1.16.43"
$ poetry add "s3fs<=2022.5.0" # s3fsの制約を緩める

Updating dependencies
Resolving dependencies... (8.4s)

Writing lock file

Package operations: 2 installs, 0 updates, 0 removals

  • Installing fsspec (2022.5.0)
  • Installing s3fs (0.4.2)
```

</div>
</template>
<template v-slot:right>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

- 例えば, `s3ds`のバージョン制約を緩めることで, `boto3`の依存している`botocore`のバージョンと競合しないバージョンの`s3ds`のバージョンを探索してくれる.

- 上のようにバージョン制約を緩めても競合しないバージョンがもし見つからない場合は同様にSolverProblemErrorが発生する. このような場合は`boto3`側の制約も緩めることを考える必要がある.

</template>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 150%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: center
class: text-center
---

# About us

[cvpaper.challenge](http://xpaperchallenge.org/cv/) 

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 400%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>