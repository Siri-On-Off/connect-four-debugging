## Testabsturz

### Invalide Eingaben
- Programm starten mit
    ```
    deno run main.ts
    ```
- Eingabe durch Player x oder o (Um Spieler o zu bekommen, zuerst valide Eingabe für Player x eingeben): 

    7, 50, -1, -5, asd

    ```bash
    error: Uncaught (in promise) TypeError: Cannot read properties of undefined (reading '0')
        row[i] = this.fields[r][i];
                                ^

    at Board.getRow (file:///C:/.../board.ts:95:30)
    at Board.horizontalWinner (file:///C:/.../board.ts:75:22)        
    at Board.winner (file:///C:/.../board.ts:50:29)
    at file:///C:/.../main.ts:14:24
    ```
- Eingabe: 0 x 7 Mal

    ```
    0 1 2 3 4 5 6
    o _ _ _ _ _ _
    x _ _ _ _ _ _
    o _ _ _ _ _ _
    x _ _ _ _ _ _
    o _ _ _ _ _ _
    x _ _ _ _ _ _

    error: Uncaught (in promise) TypeError: Cannot read properties of undefined (reading '0')
        row[i] = this.fields[r][i];
                                ^
        at Board.getRow (file:///C:/U.../board.ts:95:30)
        at Board.horizontalWinner (file:///C:/.../board.ts:75:22)        
        at Board.winner (file:///C:/.../board.ts:50:29)
        at file:///C:/.../main.ts:14:24
    ```

### Spiellogik
- Horizontaler Gewinn: richtig
    ```
    0 1 2 3 4 5 6
    _ _ _ _ _ _ _
    _ _ _ _ _ _ _
    _ _ _ _ _ _ _
    _ _ _ _ _ _ _
    _ _ _ _ o o o
    _ _ _ x x x x

    Player x: A winner is you!
    ```

- Vertikaler Gewinn: richtig
    ```
    0 1 2 3 4 5 6
    _ _ _ _ _ _ _
    _ _ _ _ _ _ _
    _ _ _ x _ _ _
    _ _ _ x o _ _
    _ _ _ x o _ _
    _ _ _ x o _ _

    Player x: A winner is you!
    ```

- Diagolaer Gewinn: richtig
    ```
    0 1 2 3 4 5 6
    _ _ _ _ _ _ _
    _ _ _ _ _ _ _
    _ _ _ x _ _ _
    _ _ x x _ _ _
    o x o o _ _ _
    x o o x _ _ _

    Player x: A winner is you!
    ```