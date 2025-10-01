PalladiumEvents.registerAnimations((event) => {
    event.register('saiyan/kamehameha_charge', 15, (builder) => {
        let powers = [
            'saiyan:saiyan', 'saiyan:ssj1-g1', 'saiyan:ssj2', 'saiyan:ssj3',
            'saiyan:ssj1-g4','saiyan:ssj_god','saiyan:ui_sign','saiyan:ui_perfect',
            'saiyan:ssj_blue','saiyan:ssj_blue_evo','saiyan:ssj4','saiyan:ue'
        ];
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

        // Third-person base pose (all zeroed)
        if (kame_anim > 0 && !builder.isFirstPerson()) {
            builder.get('head')
                .setXRotDegrees(5)
                .setYRotDegrees(280)
                .setZRotDegrees(0)
                .setX(0)
                .setY(0)
                .setZ(0)
                .animate('InOutCubic', kame_anim);

            builder.get('body')
                .setXRotDegrees(0)
                .setYRotDegrees(-100)
                .setZRotDegrees(0)
                .setX(0)
                .setY(-1)
                .setZ(0)
                .animate('InOutCubic', kame_anim);

            builder.get('right_arm')
                .setXRotDegrees(118)
                .setYRotDegrees(150)
                .setZRotDegrees(-200)
                .setX(-5)
                .setY(0)
                .setZ(0)
                .animate('InOutCubic', kame_anim);

            builder.get('left_arm')
               .setXRotDegrees(90)
                .setYRotDegrees(150)
                .setZRotDegrees(-200)
                .setX(4)
                .setY(3)
                .setZ(0)
                .animate('InOutCubic', kame_anim);

            builder.get('right_leg')
                .setXRotDegrees(0)
                .setYRotDegrees(15)
                .setZRotDegrees(15)
                .animate('easeOutQuad', kame_anim);

            builder.get('left_leg')
                .setXRotDegrees(0)
                .setYRotDegrees(-15)
                .setZRotDegrees(-15)
                .animate('easeOutQuad', kame_anim);
        }

        // First-person base pose (all zeroed)
        if (kame_anim > 0.0 && builder.isFirstPerson()) {
            builder.get('body')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .setX(0)
                .setY(0)
                .setZ(0)
                .animate('InOutCubic', kame_anim);

            builder.get('right_arm')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .setX(0)
                .setY(0)
                .setZ(0)
                .animate('InOutCubic', kame_anim);

            builder.get('left_arm')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .setX(0)
                .setY(0)
                .setZ(0)
                .animate('InOutCubic', kame_anim);
        }
    });
});
