# D&D Monster Dice Helper
A simple helper that adds buttons to roll dice for DnD 5e monsters.

https://agecaf.github.io/dnd-monster-dice-helper/gh-pages/

## What is this?

The idea is that we'd like to have buttons that can help us roll various dice from a monster sheet. For example, whenever we write `1d6+2`, we would like to replace that by a button which rolls that dice.

So we made a tool were we can "copy-paste" text from a monster's stat sheet, make a couple of changes, and get a useful "interactive monster sheet". We added a few extre features in addition to dice rolling.

This tool is made with D&D 5e in mind, e.g. `+4` is assumed to be a `1d20+4` roll on the dice. It is likely that the tool can be adapted into different games.

## Features

- *Dice rolling*; it interprets text like `1d6`, `1d6+2` and `+4` as dice rolls (the latter assumed to be a `1d20`).
- *Multiple Monsters*; You can have multiple monsters at the same time, as well as reorder them (eg in order of initiative). This could be used to keep track of initiative by adding PCs as monsters (just writing their names, not the full stats).
- *Keeping track of HP, status, resources*; simple text boxes and checkboxes are included, a more advanced box to keep track of HP is included as well (can be used to add/subtract directly).
- *Minimize Sheets*; you can choose which information is still shown in the minimized form.
- *Some formatting*; Stat modifiers are made into a table, features are written in a different font, etc. 

## Intended Use

While one could copy paste a moster sheet directly and manually add the formatting, we intend this tool to be used with prepared monsters; one would copy paste the monster sheet into a text document, modify it there, and store it to be used in the session. Then, you can copy paste the ready material into this tool. Multiple monsters can be copy-pasted at the same time.


# Examples
(This section is distributed under the Open Gaming License)

Here are some examples of what the monster sheets for some monsters from the [SRD](https://dnd.wizards.com/articles/features/systems-reference-document-srd) could look like.

## Bandit (Minimal)
A minimal example
```
# Bandit
Armor Class: 12 (leather armor)
Hit Points: 11 (2d8 + 2)
Speed: 30 ft.
STR 11 (+0) DEX 12 (+1) CON 12 (+1) WIS 10 (+0) INT 10 (+0) CHA 10 (+0)
Senses: passive Perception 10
Languages: Common
## Actions
Scimitar: Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.
Light Crossbow: Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.
```

## Bandit (With fun features)
The same example as above, except we add a text box to keep track of statuses, we write down the AC in a way which is still shown when minimized, and we include a dynamic HP box.
```
# Bandit # [..] # AC 12, HP [H]
Hit Points: 11 (2d8 + 2)
Speed: 30 ft.
STR 11 (+0) DEX 12 (+1) CON 12 (+1) WIS 10 (+0) INT 10 (+0) CHA 10 (+0)
Senses: passive Perception 10
Languages: Common
## Actions
Scimitar: Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.
Light Crossbow: Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.
```


## Adult Red Dragon
This shows how we can add quality of life parts to a monster such as dice rolls for recharge abilities, and checkboxes to see if an ability is available, keep track of used legendary actions and resistanced, etc.

```
# Adult Red Dragon # [..] # AC 19, HP [H], L. Act. [][][], L. Res. [][][]

Hit Points: 256 (19d12+133)
Speed: 40 ft., climb 40 ft., fly 80 ft.
STR 27 (+8) DEX 10 (+0) CON 25 (+7) INT 16 (+3) WIS 13 (+1) CHA 21 (+5)
Saving Throws: Dex +6, Con +13, Wis +7, Cha +11
Skills Perception: +13, Stealth +6
Damage Immunities: Fire
Senses: Blindsight 60 Ft., Darkvision 120 Ft., passive Perception 23
Languages: Common, Draconic

Legendary Resistance: (3/Day) If the dragon fails a saving throw, it can choose to succeed instead.

## Actions
Multiattack: The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.
Bite: Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: (2d10 + 8) piercing damage plus (2d6)fire damage.
Claw: Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: (2d6 + 8) slashing damage.
Tail: Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: (2d8 + 8) bludgeoning damage.
Frightful Presence: Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.
Fire Breath: (Recharge 5-6) 1d6 [] The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one.
## Legendary Actions
Adult Red Dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature’s turn. Adult Red Dragon regains spent legendary actions at the start of their turn.
Detect: The dragon makes a Wisdom (Perception) check.
Tail Attack: The dragon makes a tail attack.
Wing Attack: (Costs 2 Actions) The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
```

# Formatting

## Title, Minimized text

The monster's name is written in this place, a minimal example would be `# Bandit`. The first like has to begin like this, otherwise you won't create a monster. 

This is also a separator; so for example if you copy paste
```
# Bandit
# Actions
```
You will get two monsters; a "Bandit" and an "Actions". This is so that you can copy-paste multiple monsters at the same time if you have your encounters planned in advance; just have them one after the other in the same text file.

### Minimized text

The first line is the only thing that remains when you minimize the monster sheet. However, you can add more things to the minimized monster sheet, such as the AC, or boxes to keep track of HP, statuses, etc. When it's not the monster's turn, keeping them minimized might keep things simpler, and having their AC and HP on hand might be useful.

```
# Monster Name # Row 1 # Row 2
```

- Row 1 will appear next to the monster's name, but in a different font.
- Row 2 will appear under the monster's name.
- Both rows are optional. You can leave Row 1 empty if you only need to use row 2.
- You can add dice rolls, special boxes, etc to Monster Name, Row 1 or Row 2.

```
# Monster Name
# Monster Name # Row 1
# Monster Name ## Row 2
# Monster Name # Row 1 # Row 2
```

## Sutheadings

These use two octothorpes such as `## Actions` or `## Legendary actions`. Like as for the title, you can add some text in the different font `## Action # Row 1`. If you want to only use the second font, it can be done by `### Action`.

## Features

Any line starting with something with a colon will change the font of what goes in front.
```
Languages: Common
``` 
Note that many monster sheets use periods instead of colons, you'll have to change them for colons, ie change `Languages. Common` for `Languages: Common`. This is because we don't want to highlight first sentences when they're not features.

## Dice

Any text of the form `XdX`,`XdX+X` or `+X` is interpreted as a dice roll, where `X` are numbers. The `+` can be minuses and there can be some spaces between the operation signs. For example the following are dice rolls; `1d6`, `+4`, `2d6 + 3`, `- 1`.

If the dice are not specified, it is assumed to be a `1d20`; this is to make it easier for to Hit rolls `to Hit +4`, as well as the stat rolls `CHA 10 (+0)`, ability check rolls `Perception +5`, and so on.

For technical reasons `W+X` is not interpreted as a roll if the character `W` is alphanumeric, so for example writing `(Recharge 5-6)` does not transform the `-6` into a roll.

## Stat tables
We usually want to write the stat tables in the following way:
```
STR 27 (+8) DEX 10 (+0) CON 25 (+7) INT 16 (+3) WIS 13 (+1) CHA 21 (+5)
```

More generally what it is detecting is a sequence of things in all caps, followed by something optional, followed by something in parenthesis, so the following would also give a table:
```
DOG (happy) CAT +2 (sad) 
```
... The format is optimized for classic `STR DEX CON INT WIS CHA` though, but you could for example only include the modifiers if you wanted
```
STR (+8) DEX (+0) CON (+7) INT (+3) WIS (+1) CHA (+5)
```

## Checkboxes

You add them with `[]` at almost any place. They're useful for keeping track of resources which recharge, or are small in number, such as Legendary Actions, Resistances, and so on.

## Notes

You can add small text boxes for any kinds of notes at almost any place. `[.]` will be a very small text box (eg to write down the initiative); `[..]` is a medium text box, which uses about half the width available; and `[...]` is a longer text box, covering a line.

You can use them, for example, to keep track of conditions (Hex, Charmed, Prone, etc), or other notes (eg who they're next to if you're running theater of the mind).

## HP boxes

You can add them at any point with a `[H]`. They're not only used for health, they're to keep track of numeric things that change a lot. Once you have them, you can write `+X` or `-X` to add or remove to the current value, to make calculating the hp easier. It also evaluates the expressions (using `eval`), so you could write things like `+3+4` or `5*6`.

For example, say the monster's HP starts at 60. The text box starts at 0, so you just write `60` in the text box to update the health. 

Now say they receive 6 points of damage. Well you can either remove the text and write `-6`, hit enter or select outside, and the text will be updated to `54`; or you can just write next to the text that is already there `60-6`, hit enter or select outside, and the text will be updated to `54`.

If they then receive 6 points of slashing damage and 3 points of radiant damage... write `-6-3`, no need to add them mentally.

# License
The code contained in /gh-pages/ is distributed according to the MIT license.
The *Example* section in this document is distributed according to the Open Gaming License. All other sections in this document are distributed according to the MIT license.

# TODO
- Max/Min possible rolls displayed differently (for crit fail, crit miss).
- Being able to remove monsters?
