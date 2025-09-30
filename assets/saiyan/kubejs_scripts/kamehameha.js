PalladiumEvents.registerAnimations((event) => {
    event.register('saiyan/kamehameha', 15, (builder) => {
        // Check all Saiyan powers
        let powers = ['saiyan:saiyan', 'saiyan:ssj1-g1', 'saiyan:ssj2', 'saiyan:ssj3','saiyan:ssj1-g4','saiyan:ssj_god','saiyan:ui_sign','saiyan:ui_perfect','saiyan:ssj_blue','saiyan:ssj_blue_evo','saiyan:ssj4','saiyan:ue'];
        let kame_anim = 0;

        for (let power of powers) {
            kame_anim = Math.max(
                kame_anim,
                animationUtil.getAnimationTimerAbilityValue(
                    builder.getPlayer(),
                    power,
                    'kame_abil',
                    builder.getPartialTicks()
                )
            );
        }

        // Third-person block pose
        if (kame_anim > 0 && !builder.isFirstPerson()) {
            builder.get('body')
                .rotateXDegrees(5)              // small forward lean
                .animate('InOutCubic', kame_anim);

            builder.get('right_arm')
                .setXRotDegrees(-90)
                .setYRotDegrees(-15)
                .setZRotDegrees(0)
                .setZ(builder.getModel().rightArm.z - 4.5)
                .animate('InOutCubic', kame_anim);

            builder.get('left_arm')
                .setXRotDegrees(-90)
                .setYRotDegrees(15)
                .setZRotDegrees(0)
                .setZ(builder.getModel().leftArm.z - 4.5)
                .animate('InOutCubic', kame_anim);

            builder.get('right_leg')
                .setXRotDegrees(-15)   // right leg back
                .setZRotDegrees(5)
                .animate('easeOutQuad', kame_anim);

            builder.get('left_leg')
                .setXRotDegrees(10)    // left leg forward
                .setZRotDegrees(-5)
                .animate('easeOutQuad', kame_anim);
        }

        // First-person block pose
        if (kame_anim > 0.0 && builder.isFirstPerson()) {
            builder.get('body')
                .rotateXDegrees(3)    // lighter lean in first-person
                .animate('InOutCubic', kame_anim);

            builder.get('right_arm')
                .setXRotDegrees(-90)
                .setYRotDegrees(-10)
                .setZRotDegrees(0)
                .setZ(-4.5)
                .animate('InOutCubic', kame_anim);

            builder.get('left_arm')
                .setXRotDegrees(-90)
                .setYRotDegrees(10)
                .setZRotDegrees(0)
                .setZ(-4.5)
                .animate('InOutCubic', kame_anim);
        }
    });
});
