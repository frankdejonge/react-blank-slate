# Setup

## 1. Clone the repository

```bash
git clone git@github.com:frankdejonge/react-blank-slate.git
```

## 2. Install dependencies using [Yarn](https://yarnpkg.com/en/)

```bash
yarn install
```

# Running it

## 1. Run a server

Any would work really, but PHP has an easy builtin server:

```bash
php -S localhost:4000
```

Leave running in a terminal.

## 2. Webpack build watcher

In another terminal:

```bash
yarn webpack --watch --mode=development
```

Leave running too. This will watch files for changes and rebuild them when they change, as if by magic.
