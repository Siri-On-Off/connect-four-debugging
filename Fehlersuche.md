Um den fallenden Diagonalen Gewinner zu errechnen, gibt es in board.ts die private Methode **diagonalWinner**, der die private Methode **getDiagonals** aufruft.


```typescript
  private diagonalWinner(player: Player, r: number, c: number): Player {
    const [diagUp, diagDown] = this.getDiagonals(r, c);
    const win = player.repeat(CONNECT_N);
    if (diagUp.includes(win) || diagDown.includes(win)) {
      return player;
    }
    return Player.Nobody;
  }

  private getDiagonals(r: number, c: number): [string, string] {
    // Woe to thee, who entered here, for you dug too deep and unearthed daemons of the otherworld!
    const rising: Array<string> = [];
    const falling: Array<string> = [];
    for (let i = r, j = c; i >= 0 && j < this.fields[0].length; i--, j++) {
      rising.push(this.fields[i][j]);
    }
    for (let i = r, j = c; i < this.fields.length && j >= 0; i++, j--) {
      rising.push(this.fields[i][j]);
    }
    for (
      let i = r, j = c;
      i < this.fields.length && j < this.fields[0].length;
      i++, j++
    ) {
      falling.push(this.fields[i][j]);
    }
    for (let i = r, j = c; i >= 0 && j >= 0; i--, j--) {
      falling.push(this.fields[i][i]);
    }
    return [rising.join(""), falling.join("")];
  }
```


In Der Methode **getDiagonals** fällt auf, dass beim falling, was nicht stimmt.

```
falling.push(this.fields[i][i]);
```

Die anderen haben immer [i][j], aber hier wurde beides mit "i" besetzt.