PalladiumEvents.registerAnimations((event) => {
    event.register('saiyan/dodge4', 15, (builder) => {
        // Check all Saiyan powers
let powers = ['saiyan:ui_sign', 'saiyan:ui_perfect'];
        let block_anim = 0;

        for (let power of powers) {
            block_anim = Math.max(
                block_anim,
                animationUtil.getAnimationTimerAbilityValue(
                    builder.getPlayer(),
                    power,
                    'dodge_abil4',
                    builder.getPartialTicks()
                )
            );
        }

        // Third-person dodge with duck
        if (block_anim > 0 && !builder.isFirstPerson()) {
            builder.get('body')
                .rotateXDegrees(20)      // pitch forward to duck
                .rotateYDegrees(-25)
                .moveZ(0.6)
                .moveX(-2.5)
                .moveY(-0.5)             // move down slightly
                .animate('easeInOutSine', block_anim);

            builder.get('right_arm')
                .setXRotDegrees(-35)
                .setYRotDegrees(-20)
                .setZRotDegrees(-5)
                .animate('easeInOutSine', block_anim);

            builder.get('left_arm')
                .setXRotDegrees(-30)
                .setYRotDegrees(15)
                .setZRotDegrees(5)
                .animate('easeInOutSine', block_anim);

            builder.get('right_leg')
                .setXRotDegrees(5)
                .setYRotDegrees(3)
                .animate('easeOutQuad', block_anim);

            builder.get('left_leg')
                .setXRotDegrees(-3)
                .setYRotDegrees(4)
                .animate('easeOutQuad', block_anim);
        }

        // First-person dodge with duck
        if (block_anim > 0 && builder.isFirstPerson()) {
            builder.get('body')
                .rotateXDegrees(15)     // slight duck forward
                .moveY(-0.3)            // move down slightly
                .animate('easeInOutSine', block_anim);

            builder.get('right_arm')
                .setXRotDegrees(-40)
                .setYRotDegrees(-8)
                .setZRotDegrees(-2)
                .setY(1.2)
                .setZ(-2.5)
                .animate('easeInOutSine', block_anim);

            builder.get('left_arm')
                .setXRotDegrees(-40)
                .setYRotDegrees(8)
                .setZRotDegrees(2)
                .setY(1.2)
                .setZ(-2.5)
                .animate('easeInOutSine', block_anim);
        }
    });
});
