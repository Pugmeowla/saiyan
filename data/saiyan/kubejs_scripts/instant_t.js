ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;
    const StringArgument = Java.loadClass("com.mojang.brigadier.arguments.StringArgumentType");

    event.register(
        Commands.literal("instant_t")
            .then(
                Commands.argument("targetName", StringArgument.greedyString()) // <-- greedy string
                    .executes(ctx => {
                        let player = ctx.source.playerOrException;

                        // Only allow if the player has the instant_t tag
                        if (!player.tags.contains("instant_t")) {
                            player.tell(Text.red("You lack the 'instant_t' tag!"));
                            return 0;
                        }

                        // Get the entire string, including spaces
                        let targetName = StringArgument.getString(ctx, "targetName");
                        let level = player.level;

                        // Find first matching entity with exact name
                        let target = level.getEntities().find(e => e.name.getString() === targetName);

                        if (!target) {
                            player.tell(Text.red(`No entity found with name '${targetName}'`));
                            return 0;
                        }

                        // Teleport player to target
                        player.teleportTo(target.x, target.y, target.z);
                        player.tell(Text.green(`Teleported to ${targetName}`));

                        return 1;
                    })
            )
    );
});
