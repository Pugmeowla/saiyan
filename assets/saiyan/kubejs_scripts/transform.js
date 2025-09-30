PalladiumEvents.registerAnimations((event) => {
    event.register('alienevo/transform', 15, (builder) => {
        // Check all Saiyan powers
        let powers = ['saiyan:saiyan', 'saiyan:ssj1-g1', 'saiyan:ssj2', 'saiyan:ssj3','saiyan:ssj1-g4','saiyan:ssj_god','saiyan:ui_sign','saiyan:ui_perfect','saiyan:ssj_blue','saiyan:ssj_blue_evo','saiyan:ssj4','saiyan:ue'];
        let transform_anim = 0;

        for (let power of powers) {
            transform_anim = Math.max(
                transform_anim,
                animationUtil.getAnimationTimerAbilityValue(
                    builder.getPlayer(),
                    power,
                    'transform_abil',
                    builder.getPartialTicks()
                )
            );
        }

        // Third-person transform pose
        if (transform_anim > 0 && !builder.isFirstPerson()) {
            // Body tilt backwards
            builder.get('body')
                .setXRotDegrees(-35)
                .animate('InOutCubic', transform_anim);

            // Head tilted down
            builder.get('head')
                .setXRotDegrees(25)
                .animate('InOutCubic', transform_anim);

            // Legs stay vertical
            builder.get('right_leg')
                .setXRotDegrees(-35)
                .animate('InOutCubic', transform_anim);

            builder.get('left_leg')
                .setXRotDegrees(-35)
                .animate('InOutCubic', transform_anim);

            // Right arm — closer to body
            builder.get('right_arm')
                .setXRotDegrees(-60)
                .setYRotDegrees(-25)
                .setZRotDegrees(-15)
                .setX(builder.getModel().rightArm.x - 1.0)
                .setY(builder.getModel().rightArm.y + 2.5)
                .setZ(builder.getModel().rightArm.z - 1.0)
                .animate('InOutCubic', transform_anim);

            // Left arm — closer to body
            builder.get('left_arm')
                .setXRotDegrees(-60)
                .setYRotDegrees(25)
                .setZRotDegrees(15)
                .setX(builder.getModel().leftArm.x + 1.0)
                .setY(builder.getModel().leftArm.y + 2.5)
                .setZ(builder.getModel().leftArm.z - 1.0)
                .animate('InOutCubic', transform_anim);
        }

        // First-person transform pose
        if (transform_anim > 0.0 && builder.isFirstPerson()) {
            builder.get('right_arm')
                .setXRotDegrees(-55)
                .setYRotDegrees(15)
                .setZRotDegrees(0)
                .setY(1)
                .setZ(-3)
                .animate('InOutCubic', transform_anim);

            builder.get('left_arm')
                .setXRotDegrees(-55)
                .setYRotDegrees(-15)
                .setZRotDegrees(0)
                .setY(1)
                .setZ(-3)
                .animate('InOutCubic', transform_anim);
        }
    });
});