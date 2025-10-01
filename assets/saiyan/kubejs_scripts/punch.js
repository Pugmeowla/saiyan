PalladiumEvents.registerAnimations((event) => {
    event.register('tetramand/kamehameha_charge', 200, (builder) => {
        let powers = ['saiyan:saiyan', 'saiyan:ssj1-g1', 'saiyan:ssj2', 'saiyan:ssj3'];
        let charge = 0;

        for (let power of powers) {
            charge = Math.max(
                charge,
                animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), power, 'kamehameha_charge', builder.getPartialTicks())
            );
        }

        if (charge > 0) {
            if (!builder.isFirstPerson()) {
                // Right arm pulled back near waist
                builder.get('right_arm')
                    .setZ(3) // bring arm inward
                    .setXRotDegrees(-80) // elbow bent
                    .setYRotDegrees(-30) // angled inward
                    .setZRotDegrees(10)  // slight tilt
                    .animate('easeOutCubic', charge);

                // Left arm pulled back near waist
                builder.get('left_arm')
                    .setZ(3)
                    .setXRotDegrees(-80)
                    .setYRotDegrees(30)
                    .setZRotDegrees(-10)
                    .animate('easeOutCubic', charge);

                // Torso twisted slightly forward
                builder.get('body')
                    .rotateYDegrees(0) // facing forward
                    .setXRotDegrees(-10) // slight lean forward
                    .animate('easeOutCubic', charge);

                // Head looking forward at target
                builder.get('head')
                    .rotateYDegrees(0)
                    .setXRotDegrees(0)
                    .animate('easeOutCubic', charge);
            }

            if (builder.isFirstPerson()) {
                // Arms pulled down into view like FP Kamehameha stance
                builder.get('right_arm')
                    .setY(-6)
                    .setXRotDegrees(-70)
                    .setYRotDegrees(-20)
                    .animate('easeOutCubic', charge);

                builder.get('left_arm')
                    .setY(-6)
                    .setXRotDegrees(-70)
                    .setYRotDegrees(20)
                    .animate('easeOutCubic', charge);
            }
        }
    });
});
