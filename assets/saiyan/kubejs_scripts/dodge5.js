PalladiumEvents.registerAnimations((event) => {
    event.register('saiyan/dodge5', 15, (builder) => {
        // Check all Saiyan powers
let powers = ['saiyan:ui_sign', 'saiyan:ui_perfect'];
        let block_anim = 0;

        for (let power of powers) {
            block_anim = Math.max(
                block_anim,
                animationUtil.getAnimationTimerAbilityValue(
                    builder.getPlayer(),
                    power,
                    'dodge_abil5',
                    builder.getPartialTicks()
                )
            );
        }

        // Third-person dodge mirrored (right) and duck
        if (block_anim > 0 && !builder.isFirstPerson()) {
            builder.get('body')
                .rotateXDegrees(15)      // duck forward
                .rotateYDegrees(40)      // lean to the right
                .moveX(1.5)              // shift right
                .moveZ(0.5)
                .moveY(-0.5)             // lower body
                .animate('easeInOutSine', block_anim);

            builder.get('right_arm')
                .setXRotDegrees(-25)
                .setYRotDegrees(35)
                .setZRotDegrees(10)
                .animate('easeInOutSine', block_anim);

            builder.get('left_arm')
                .setXRotDegrees(-20)
                .setYRotDegrees(-25)
                .setZRotDegrees(-10)
                .animate('easeInOutSine', block_anim);

            builder.get('right_leg')
                .setXRotDegrees(-8)
                .setYRotDegrees(10)
                .animate('easeOutQuad', block_anim);

            builder.get('left_leg')
                .setXRotDegrees(10)
                .setYRotDegrees(5)
                .animate('easeOutQuad', block_anim);
        }

        // First-person dodge mirrored (right)
        if (block_anim > 0 && builder.isFirstPerson()) {
            builder.get('body')
                .rotateXDegrees(10)     // slight forward duck
                .rotateYDegrees(20)     // lean right
                .moveY(-0.3)
                .moveX(0.5)
                .animate('easeInOutSine', block_anim);

            builder.get('right_arm')
                .setXRotDegrees(-35)
                .setYRotDegrees(20)
                .setZRotDegrees(5)
                .setY(1.0)
                .setZ(-2.0)
                .animate('easeInOutSine', block_anim);

            builder.get('left_arm')
                .setXRotDegrees(-35)
                .setYRotDegrees(-20)
                .setZRotDegrees(-5)
                .setY(1.0)
                .setZ(-2.0)
                .animate('easeInOutSine', block_anim);
        }
    });
});
