// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile19 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile20 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile21 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile23 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000f0d1111111111111111111111110b0c0e12121212121212121212121212120a0212121212121212121212121212120702121212121214141414121212121207021212121212141414141212121212070212121212121414141412121212120702121212121214141414121212121207021313131313131313131313131313070210101010101010101010101010100702101010101010101010101010101007021010101010101010101010101010070210101010101010101010101010100702101010101010101010101010101007021010101010101010101010101010070910101010101010101010101010100504030101010101010101010101010806`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile23,sprites.dungeon.stairNorth,sprites.dungeon.stairEast,sprites.vehicle.roadIntersection3], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`100010000a0606060606060606060606060606080b0202020202020202020202020202070b0202020202020202020202020202070b0202020202040404040202020202070b0202020202040404040202020202070b0202020202040404040202020202070b0202020202040404040202020202070b0303030303030303030303030303070b0101010101010101010101010101070b0101010101010101010101010101070b0101010101010101010101010101070b0101010101010101010101010101070b0101010101010101010101010101070b0101010101010101010101010101070b01010101010101010101010101010709060606060606060606060606060605`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile21,sprites.dungeon.stairNorth,sprites.dungeon.stairEast,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection4,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile3":return tile3;
            case "Floor Tile 2":
            case "tile2":return tile2;
            case "Wall Tile 0":
            case "tile4":return tile4;
            case "Wall Tile 1":
            case "tile5":return tile5;
            case "Wall Tile 6":
            case "tile10":return tile10;
            case "Wall Tile 4":
            case "tile8":return tile8;
            case "Wall Tile 7":
            case "tile11":return tile11;
            case "Wall Tile 5":
            case "tile9":return tile9;
            case "Wall Tile 2":
            case "tile6":return tile6;
            case "Wall Tile 8":
            case "tile12":return tile12;
            case "Wall Tile 3":
            case "tile7":return tile7;
            case "Wall Tile 9":
            case "tile13":return tile13;
            case "Wall Tile 10":
            case "tile14":return tile14;
            case "Wall Tile 11":
            case "tile15":return tile15;
            case "Wall Tile 12":
            case "tile16":return tile16;
            case "Wall Tile 15":
            case "tile19":return tile19;
            case "Wall Tile 16":
            case "tile20":return tile20;
            case "Floor Tile 3":
            case "tile21":return tile21;
            case "Wall Tile 17":
            case "tile23":return tile23;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
