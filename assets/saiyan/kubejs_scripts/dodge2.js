PalladiumEvents.registerAnimations((event) => {
    event.register('saiyan/dodge2', 15, (builder) => {
        // Check all Saiyan powers
let powers = ['saiyan:ui_sign', 'saiyan:ui_perfect'];
        let block_anim = 0;

        for (let power of powers) {
            block_anim = Math.max(
                block_anim,
                animationUtil.getAnimationTimerAbilityValue(
                    builder.getPlayer(),
                    power,
                    'dodge_abil2',
                    builder.getPartialTicks()
                )
            );
        }

        // Third-person mirrored "dodge-block"
        if (block_anim > 0 && !builder.isFirstPerson()) {
            builder.get('body')
                .rotateYDegrees(25)      // flipped opposite lean
                .moveZ(0.6)
                .moveX(2.5)              // mirrored lateral shift
                .animate('easeInOutSine', block_anim);

            builder.get('right_arm')
                .setXRotDegrees(-30)
                .setYRotDegrees(15)     // mirrored inward angle
                .setZRotDegrees(5)
                .animate('easeInOutSine', block_anim);

            builder.get('left_arm')
                .setXRotDegrees(-35)
                .setYRotDegrees(-20)    // flipped compared to original
                .setZRotDegrees(-5)
                .animate('easeInOutSine', block_anim);

            builder.get('right_leg')
                .setXRotDegrees(-3)     // mirrored stance
                .setYRotDegrees(4)
                .animate('easeOutQuad', block_anim);

            builder.get('left_leg')
                .setXRotDegrees(5)
                .setYRotDegrees(3)
                .animate('easeOutQuad', block_anim);
        }

        // First-person mirrored "block"
        if (block_anim > 0 && builder.isFirstPerson()) {
            builder.get('right_arm')
                .setXRotDegrees(-40)
                .setYRotDegrees(8)      // flipped inward/outward
                .setZRotDegrees(2)
                .setY(1.2)
                .setZ(-2.5)
                .animate('easeInOutSine', block_anim);

            builder.get('left_arm')
                .setXRotDegrees(-40)
                .setYRotDegrees(-8)
                .setZRotDegrees(-2)
                .setY(1.2)
                .setZ(-2.5)
                .animate('easeInOutSine', block_anim);
        }
    });
});
