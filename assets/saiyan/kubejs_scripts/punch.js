PalladiumEvents.registerAnimations((event) => {
    event.register('tetramand/punch', 200, (builder) => {
        let powers = ['saiyan:saiyan', 'saiyan:ssj1-g1', 'saiyan:ssj2', 'saiyan:ssj3'];
        let punchRight = 0;
        let punchLeft = 0;

        for (let power of powers) {
            punchRight = Math.max(
                punchRight,
                animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), power, 'punch_righthand', builder.getPartialTicks())
            );
            punchLeft = Math.max(
                punchLeft,
                animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), power, 'punch_lefthand', builder.getPartialTicks())
            );
        }

        // Right-hand punch
        if (punchRight > 0) {
            if (!builder.isFirstPerson()) {
                builder.get('right_arm')
                    .setZ(4)
                    .setXRotDegrees(-100)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('easeOutCubic', punchRight);

                builder.get('left_arm')
                    .setXRotDegrees(-26)
                    .setYRotDegrees(-5)
                    .setZRotDegrees(5)
                    .animate('easeOutCubic', punchRight);

                builder.get('body')
                    .rotateYDegrees(-45)
                    .animate('easeOutCubic', punchRight);

                builder.get('head')
                    .rotateYDegrees(-45)
                    .animate('easeOutCubic', punchRight);
            }

            if (builder.isFirstPerson()) {
                builder.get('right_arm')
                    .setY(-10)
                    .animate('easeOutCubic', punchRight);
            }
        }

        // Left-hand punch
        if (punchLeft > 0) {
            if (!builder.isFirstPerson()) {
                builder.get('right_arm')
                    .setXRotDegrees(-26)
                    .setYRotDegrees(5)
                    .setZRotDegrees(-5)
                    .animate('easeOutCubic', punchLeft);

                builder.get('left_arm')
                    .setXRotDegrees(-100)
                    .setZ(4)
                    .animate('easeOutCubic', punchLeft);

                builder.get('body')
                    .rotateYDegrees(45)
                    .animate('easeOutCubic', punchLeft);

                builder.get('head')
                    .rotateYDegrees(45)
                    .animate('easeOutCubic', punchLeft);
            }

            if (builder.isFirstPerson()) {
                builder.get('left_arm')
                    .setY(-10)
                    .animate('easeOutCubic', punchLeft);
            }
        }
    });
});
