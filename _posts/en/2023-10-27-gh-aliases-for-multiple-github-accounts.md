---
title: "How to use multiple GitHub account using GitHub CLI"
categories: How-To
tags:
    - GitHub
    - GitHub CLI
---

Frequent use of multiple GitHub accounts, whether for work and personal projects, can often become a cumbersome process. The need to switch accounts and re-login each time can be quite inconvenient. In this blog post, I'll unveil a straightforward hack to streamline this process, making managing multiple GitHub accounts a more user-friendly experience.

## The login

Now a days, the [GitHub CLI](https://cli.github.com/) has become a go to tool while working with git and GitHub. After we login using the `gh auth login` command, we get a `config.yml` and a `hosts.yml` file under the `~/.config/gh` directory (for Linux). Inspecting the `hosts.yml` file, we would see something like below:

```yaml
github.com:
    user: USER_NAME
    oauth_token: AUTH_TOKEN
    git_protocol: https
```

Each time, you login with a different account, you would see `user` and `oauth_token` has changed. 

## Making it convenient

We would make use of the `gh` aliases for making things easier using the following steps:

### 1. Create host files

We would at first create different host YAML files for each GitHub account we are going to use, such as `hosts.yml.work` for work account, `hosts.yml.personal` for personal account etc.

To populate the files, we would use the identical structure as `hosts.yml`. The value of `user` would be the username of your GitHub account. To get the `oauth_token` go to *your GitHub profile > settings > Developer settings > Personal access tokens > Tokens (classic).* Now generate a new token (classic) with appropriate scopes (e.g., *gist, read:org, repo, workflow*). Copy the newly generated token and use it as the OAuth token. After populating, a file would look something like the below:

```yaml
github.com:
    user: shahad-mahmud
    oauth_token: gho_************************************
    git_protocol: https
```

### 2. Setting up aliases

If you look at the `config.yml` file, you will find a `aliases` attribute. If unmodified, it would look something like:

```yaml
aliases:
    co: pr checkout
```

Here we will create new aliases for each of our account. To do that, we will follow the following snippet:

```yaml
ALIAS_NAME:'!cp PATH/TO/A/HOST/FILE ~/.config/gh/hosts.yml && gh auth status'
```

After creating the aliases for work and personal accounts, the `aliases` attribute will look like something below:

```yaml
aliases:
    co: pr checkout
    personal: '!cp ~/.config/gh/hosts.yml.personal ~/.config/gh/hosts.yml && gh auth status'
    work: '!cp ~/.config/gh/hosts.yml.work ~/.config/gh/hosts.yml && gh auth status'
```

### 3. Switch between accounts

At this step, the work is almost done. To verify the aliases are setup, run the `gh alias list` command. It will list all available aliases including the newly created ones.

Now switch between accounts using the `gh ALIAS_NAME` command. A successful operation would look something like below:

```bash
$ gh personal        

# github.com
#   ✓ Logged in to github.com as shahad-mahmud (/home/shahad/.config/gh/hosts.yml)
#   ✓ Git operations for github.com configured to use https protocol.
#   ✓ Token: gho_************************************
#   ✓ Token scopes: gist, read:org, repo, workflow
```

Thats all for this blog post. In case of any suggestions or improvements, reach me out.
