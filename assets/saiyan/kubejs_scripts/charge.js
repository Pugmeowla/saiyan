PalladiumEvents.registerAnimations((event) => {
    event.register('alienevo/charge_something', 15, (builder) => {
        // Check all Saiyan powers
        let powers = ['saiyan:saiyan', 'saiyan:ssj1-g1', 'saiyan:ssj2', 'saiyan:ssj3','saiyan:ssj1-g4','saiyan:ssj_god','saiyan:ui_sign','saiyan:ui_perfect','saiyan:ssj_blue','saiyan:ssj_blue_evo','saiyan:ssj4','saiyan:ue'];
        let charge_anim = 0;

        for (let power of powers) {
            charge_anim = Math.max(
                charge_anim,
                animationUtil.getAnimationTimerAbilityValue(
                    builder.getPlayer(),
                    power,
                    'charge_abil',
                    builder.getPartialTicks()
                )
            );
        }

        // Third-person powering-up pose
        if (charge_anim > 0 && !builder.isFirstPerson()) {
            // Body slightly tilted back
            builder.get('body')
                .setXRotDegrees(-5)
                .animate('InOutCubic', charge_anim);

            // Head slightly tilted down
            builder.get('head')
                .setXRotDegrees(20)
                .animate('InOutCubic', charge_anim);

            // Legs flared outward
            builder.get('right_leg')
                .setXRotDegrees(-10)
                .setYRotDegrees(15)
                .setZRotDegrees(15)
                .animate('InOutCubic', charge_anim);

            builder.get('left_leg')
                .setXRotDegrees(-10)
                .setYRotDegrees(-15)
                .setZRotDegrees(-15)
                .animate('InOutCubic', charge_anim);

            // Right arm straight, slightly flared outward
            builder.get('right_arm')
                .setXRotDegrees(-10)
                .setYRotDegrees(-40)
                .setZRotDegrees(50)
                .setX(builder.getModel().rightArm.x)
                .setZ(builder.getModel().rightArm.z)
                .animate('InOutCubic', charge_anim);

            // Left arm straight, slightly flared outward
            builder.get('left_arm')
                .setXRotDegrees(-10)
                .setYRotDegrees(40)
                .setZRotDegrees(-50)
                .setX(builder.getModel().leftArm.x)
                .setZ(builder.getModel().leftArm.z)
                .animate('InOutCubic', charge_anim);
        }

        // First-person charge pose
        if (charge_anim > 0.0 && builder.isFirstPerson()) {
            builder.get('right_arm')
                .setXRotDegrees(-10)
                .setYRotDegrees(-15)
                .setZRotDegrees(10)
                .setY(1)
                .setZ(-2)
                .animate('InOutCubic', charge_anim);

            builder.get('left_arm')
                .setXRotDegrees(-10)
                .setYRotDegrees(15)
                .setZRotDegrees(-10)
                .setY(1)
                .setZ(-2)
                .animate('InOutCubic', charge_anim);
        }
    });
});
