PalladiumEvents.registerAnimations((event) => {
    event.register('alienevo/block', 15, (builder) => {
        // Check all Saiyan powers
        let powers = ['saiyan:saiyan', 'saiyan:ssj1-g1', 'saiyan:ssj2', 'saiyan:ssj3','saiyan:ssj1-g4','saiyan:ssj_god','saiyan:ui_sign'];
        let block_anim = 0;

        for (let power of powers) {
            block_anim = Math.max(
                block_anim,
                animationUtil.getAnimationTimerAbilityValue(
                    builder.getPlayer(),
                    power,
                    'block_abil',
                    builder.getPartialTicks()
                )
            );
        }

        // Third-person block pose
        if (block_anim > 0 && !builder.isFirstPerson()) {
            builder.get('right_arm')
                .setXRotDegrees(-150)
                .setYRotDegrees(-65)
                .setX(builder.getModel().rightArm.x - 1)
                .setY(builder.getModel().rightArm.y + 3)
                .setZ(builder.getModel().rightArm.z - 2)
                .animate('InOutCubic', block_anim);

            builder.get('left_arm')
                .setXRotDegrees(-150)
                .setYRotDegrees(65)
                .setX(builder.getModel().leftArm.x + 1)
                .setY(builder.getModel().leftArm.y + 3)
                .setZ(builder.getModel().leftArm.z - 1)
                .animate('InOutCubic', block_anim);
        }

        // First-person block pose
        if (block_anim > 0.0 && builder.isFirstPerson()) {
            builder.get('right_arm')
                .setXRotDegrees(-55)
                .setYRotDegrees(15)
                .setZRotDegrees(0)
                .setY(1)
                .setZ(-3)
                .animate('InOutCubic', block_anim);

            builder.get('left_arm')
                .setXRotDegrees(-55)
                .setYRotDegrees(-15)
                .setZRotDegrees(0)
                .setY(1)
                .setZ(-3)
                .animate('InOutCubic', block_anim);
        }
    });
});