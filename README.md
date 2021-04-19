# star or unstar

> An [octoherd](https://github.com/octoherd) script to add or remove star

## Usage

Minimal usage

```
$ npx @octoherd/script-star-or-unstar \
  --path-to-folders "scripts"
```

Pass all options as CLI flags to avoid user prompts

```
$ npx @octoherd/script-star-or-unstar \
  -T ghp_0123456789abcdefghjklmnopqrstuvwxyzA \
  -R "octoherd/repository-with-script-folders"
```

Add `--unstar` flag to unstar.

## Options

| option                       | type             | description                                                                                                                                                                                                                                 |
| ---------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--unstar`                   | boolean          | Set to remove a star instead of adding one.                                                                                                                                                                                                 |
| `--octoherd-token`, `-T`     | string           | A personal access token ([create](https://github.com/settings/tokens/new?scopes=repo)). Script will create one if option is not set                                                                                                         |
| `--octoherd-repos`, `-R`     | array of strings | One or multiple space-separated repositories in the form of `repo-owner/repo-name`. `repo-owner/*` will find all repositories for one owner. `*` will find all repositories the user has access to. Will prompt for repositories if not set |
| `--octoherd-bypass-confirms` | boolean          | Bypass prompts to confirm mutating requests                                                                                                                                                                                                 |

## License

[ISC](LICENSE.md)
