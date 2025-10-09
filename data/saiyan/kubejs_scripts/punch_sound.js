EntityEvents.hurt(event => {
    // Get the player who caused the damage
    const attacker = event.source?.player;
    if (!attacker) return; // Only trigger if a player caused the damage

    // Check if the player has the "punch_sound" tag
    if (!attacker.tags.contains("punch_sound")) return;

    // Play the punch sound at the player's position
    attacker.server.runCommandSilent(
        `execute at ${attacker.username} run playsound saiyan:punch block ${attacker.username}`
    );
});
