EntityEvents.hurt("minecraft:player", event => {
    // Check if player has either ui_sign or ui_perfect enabled with immortal
    if (
        !(
            abilityUtil.isEnabled(event.player, "saiyan:ui_sign", "immortal") ||
            abilityUtil.isEnabled(event.player, "saiyan:ui_perfect", "immortal")
        )
    ) return;

    let entity = event.entity;
    let damage = Math.floor(event.damage);

    if (damage) {
        // List of dodge function variants
        const dodgeFunctions = [
            "saiyan:dodge",
            "saiyan:dodge3",
            "saiyan:dodge5",
            "saiyan:dodge7",
            "saiyan:dodge9"
        ];

        // Pick one at random
        const chosenDodge = dodgeFunctions[Math.floor(Math.random() * dodgeFunctions.length)];

        // Execute the chosen dodge function
        entity.server.runCommandSilent(
            `execute as ${entity.username} at ${entity.username} run function ${chosenDodge}`
        );

        // Cancel damage
        event.cancel();
    }
});
