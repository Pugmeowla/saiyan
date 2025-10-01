PalladiumEvents.registerAnimations((event) => {
    event.register('saiyan/kamehameha2', 15, (builder) => {
        // Check all Saiyan powers
        let powers = ['saiyan:saiyan', 'saiyan:ssj1-g1', 'saiyan:ssj2', 'saiyan:ssj3','saiyan:ssj1-g4','saiyan:ssj_god','saiyan:ui_sign','saiyan:ui_perfect','saiyan:ssj_blue','saiyan:ssj_blue_evo','saiyan:ssj4','saiyan:ue'];
        let kame2_anim = 0;

        for (let power of powers) {
            kame2_anim = Math.max(
                kame2_anim,
                animationUtil.getAnimationTimerAbilityValue(
                    builder.getPlayer(),
                    power,
                    'kame2_abil',
                    builder.getPartialTicks()
                )
            );
        }

        // Third-person charge pose
        if (kame2_anim > 0 && !builder.isFirstPerson()) {
            
            builder.get('body')
                .rotateXDegrees(10)              // lean forward more
                .animate('InOutCubic', kame2_anim);

            builder.get('right_arm')
                .setXRotDegrees(-80)             // bent back near waist
                .setYRotDegrees(-25)             // angled inward
                .setZRotDegrees(10)
                .setZ(builder.getModel().rightArm.z - 3.5)
                .animate('InOutCubic', kame2_anim);

            builder.get('left_arm')
                .setXRotDegrees(-80)
                .setYRotDegrees(25)
                .setZRotDegrees(-10)
                .setZ(builder.getModel().leftArm.z - 3.5)
                .animate('InOutCubic', kame2_anim);

            builder.get('right_leg')
                .setXRotDegrees(-20)   // right leg back for stance
                .setZRotDegrees(8)
                .animate('easeOutQuad', kame2_anim);

            builder.get('left_leg')
                .setXRotDegrees(15)    // left leg forward
                .setZRotDegrees(-8)
                .animate('easeOutQuad', kame2_anim);
        }

        // First-person charge pose
        if (kame2_anim > 0.0 && builder.isFirstPerson()) {
            builder.get('body')
                .rotateXDegrees(8)    // more lean forward
                .animate('InOutCubic', kame2_anim);

            builder.get('right_arm')
                .setXRotDegrees(-65)   // pulled down toward waist
                .setYRotDegrees(-22)   // angled inward
                .setZRotDegrees(5)
                .setZ(-2)              // pulled in closer
                .setX(2)               // offset to right side
                .animate('InOutCubic', kame2_anim);

            builder.get('left_arm')
                .setXRotDegrees(-65)
                .setYRotDegrees(22)
                .setZRotDegrees(-5)
                .setZ(-2)              // pulled in closer
                .setX(-2)              // offset to left side
                .animate('InOutCubic', kame2_anim);
        }
    });
});
