
        // Check all Saiyan powers
        let powers = [
            'saiyan:saiyan', 'saiyan:ssj1-g1', 
            'saiyan:ssj2', 'saiyan:ssj3',
            'saiyan:ssj1-g4','saiyan:ssj_god',
            'saiyan:ssj_blue','saiyan:ssj_blue_evo',
            'saiyan:ssj4','saiyan:ui_sign','saiyan:ui_perfect',
            'saiyan:ue'
        ];

//Base -> SSJ
PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj1', 30, (builder) => {
            let ssj1 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:saiyan', 'transform_abil', builder.getPartialTicks(), 1, 6);
            if (ssj1 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(5.8)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0)
                    .setZ(1)
                    .animate('OutQuad', ssj1);

                builder.get('chest')
                    .setY(0)
                    .setZ(1.2)
                    .setXRotDegrees(-5)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssj1);

                builder.get('right_arm')
                    .setXRotDegrees(-139)
                    .setYRotDegrees(-55)
                    .setZRotDegrees(17)
                    .setX(-4)
                    .setY(-0.9)
                    .setZ(-2.1)
                    .animate('OutQuad', ssj1);

                builder.get('left_arm')
                    .setXRotDegrees(-145)
                    .setYRotDegrees(44)
                    .setZRotDegrees(-27)
                    .setX(4)
                    .setY(-0.9)
                    .setZ(-2.1)
                    .animate('OutQuad', ssj1);
                    
                builder.get('right_leg')
                    .setZRotDegrees(10)
                    .setX(-2)
                    .animate('OutQuad', ssj1);

                builder.get('left_leg')
                    .setZRotDegrees(-10)
                    .setX(2)
                    .animate('OutQuad', ssj1);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj1_2', 30, (builder) => {
            let ssj1_2 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:saiyan', 'transform_abil', builder.getPartialTicks(), 6, 8);
            if (ssj1_2 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(10.8)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0)
                    .setZ(1.3)
                    .animate('OutQuad', ssj1_2);

                builder.get('chest')
                    .setY(0)
                    .setZ(2)
                    .setXRotDegrees(-10)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssj1_2);

                builder.get('right_arm')
                    .setXRotDegrees(-143)
                    .setYRotDegrees(-55)
                    .setZRotDegrees(18)
                    .setX(-4)
                    .setY(-1.1)
                    .setZ(-1.7)
                    .animate('OutQuad', ssj1_2);

                builder.get('left_arm')
                    .setXRotDegrees(-152)
                    .setYRotDegrees(44)
                    .setZRotDegrees(-27)
                    .setX(4)
                    .setY(-1.2)
                    .setZ(-1.7)
                    .animate('OutQuad', ssj1_2);

                builder.get('right_leg')
                    .setZRotDegrees(10)
                    .animate('OutQuad', ssj1_2);

                builder.get('left_leg')
                    .setZRotDegrees(-10)
                    .animate('OutQuad', ssj1_2);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj1_3', 30, (builder) => {
            let ssj1_3 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:saiyan', 'transform_abil', builder.getPartialTicks(), 8, 10);
            if (ssj1_3 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(11.8)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0)
                    .setZ(1.5)
                    .animate('OutQuad', ssj1_3);

                builder.get('chest')
                    .setY(0)
                    .setZ(2.2)
                    .setXRotDegrees(-11)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssj1_3);

                builder.get('right_arm')
                    .setXRotDegrees(-145)
                    .setYRotDegrees(-55)
                    .setZRotDegrees(18)
                    .setX(-4)
                    .setY(-1.1)
                    .setZ(-1.7)
                    .animate('OutQuad', ssj1_3);

                builder.get('left_arm')
                    .setXRotDegrees(-154)
                    .setYRotDegrees(44)
                    .setZRotDegrees(-27)
                    .setX(4)
                    .setY(-1.2)
                    .setZ(-1.7)
                    .animate('OutQuad', ssj1_3);

                builder.get('right_leg')
                    .setZRotDegrees(10)
                    .animate('OutQuad', ssj1_3);

                builder.get('left_leg')
                    .setZRotDegrees(-10)
                    .animate('OutQuad', ssj1_3);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj1_4', 30, (builder) => {
            let ssj1_4 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:saiyan', 'transform_abil', builder.getPartialTicks(), 10, 30);
            if (ssj1_4 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(6)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(-0.6)
                    .setZ(1)
                    .animate('OutBack', ssj1_4);

                builder.get('chest')
                    .setY(-0.7)
                    .setZ(1.6)
                    .setXRotDegrees(-6)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutBack', ssj1_4);

                builder.get('right_arm')
                    .setXRotDegrees(-56)
                    .setYRotDegrees(18)
                    .setZRotDegrees(9)
                    .setX(-4)
                    .setY(4.1)
                    .setZ(2)
                    .animate('OutBack', ssj1_4);

                builder.get('left_arm')
                    .setXRotDegrees(-52)
                    .setYRotDegrees(-21)
                    .setZRotDegrees(-7)
                    .setX(4)
                    .setY(4.1)
                    .setZ(2)
                    .animate('OutBack', ssj1_4);

                builder.get('right_leg')
                    .setZRotDegrees(10)
                    .setY(11.5)
                    .animate('OutBack', ssj1_4);

                builder.get('left_leg')
                    .setZRotDegrees(-10)
                    .setY(11.5)
                    .animate('OutBack', ssj1_4);

            }
        });
});
//SSJ -> SSJ2
PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj2', 35, (builder) => {
            let ssj2 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj1-g4', 'transform_abil', builder.getPartialTicks(), 1, 6);
            if (ssj2 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(-20)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(-0.4)
                    .setZ(1.2)
                    .animate('OutQuad', ssj2);

                builder.get('chest')
                    .setY(-0.5)
                    .setZ(1.2)
                    .setXRotDegrees(-5)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssj2);

                builder.get('right_arm')
                    .setXRotDegrees(-175)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(-4)
                    .setY(-4.8)
                    .setZ(-0.2)
                    .animate('OutQuad', ssj2);

                builder.get('left_arm')
                    .setXRotDegrees(-175)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(4)
                    .setY(-4.4)
                    .setZ(-0.6)
                    .animate('OutQuad', ssj2);
                    
                builder.get('right_leg')
                    .setZRotDegrees(7.5)
                    .setX(-2)
                    .animate('OutQuad', ssj2);

                builder.get('left_leg')
                    .setZRotDegrees(-7.5)
                    .setX(2)
                    .animate('OutQuad', ssj2);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj2_2', 35, (builder) => {
            let ssj2_2 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj1-g4', 'transform_abil', builder.getPartialTicks(), 6, 8);
            if (ssj2_2 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(-25.5)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(-0.7)
                    .setZ(1.2)
                    .animate('OutQuad', ssj2_2);

                builder.get('chest')
                    .setY(-0.8)
                    .setZ(1.4)
                    .setXRotDegrees(-6)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssj2_2);

                builder.get('right_arm')
                    .setXRotDegrees(-175)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(-4)
                    .setY(-5.1)
                    .setZ(-0.2)
                    .animate('OutQuad', ssj2_2);

                builder.get('left_arm')
                    .setXRotDegrees(-175)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(4)
                    .setY(-5.1)
                    .setZ(-0.6)
                    .animate('OutQuad', ssj2_2);

                builder.get('right_leg')
                    .setZRotDegrees(7.5)
                    .animate('OutQuad', ssj2_2);

                builder.get('left_leg')
                    .setZRotDegrees(-7.5)
                    .animate('OutQuad', ssj2_2);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj2_3', 35, (builder) => {
            let ssj2_3 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj1-g4', 'transform_abil', builder.getPartialTicks(), 8, 10);
            if (ssj2_3 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(-32)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(-1)
                    .setZ(1.2)
                    .animate('OutQuad', ssj2_3);

                builder.get('chest')
                    .setY(-0.8)
                    .setZ(1.3)
                    .setXRotDegrees(-5)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssj2_3);

                builder.get('right_arm')
                    .setXRotDegrees(-175)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(-4)
                    .setY(-5.2)
                    .setZ(-0.2)
                    .animate('OutQuad', ssj2_3);

                builder.get('left_arm')
                    .setXRotDegrees(-175)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(4)
                    .setY(-5.2)
                    .setZ(-0.6)
                    .animate('OutQuad', ssj2_3);

                builder.get('right_leg')
                    .setZRotDegrees(7.5)
                    .animate('OutQuad', ssj2_3);

                builder.get('left_leg')
                    .setZRotDegrees(-7.5)
                    .animate('OutQuad', ssj2_3);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj2_4', 35, (builder) => {
            let ssj2_4 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj1-g4', 'transform_abil', builder.getPartialTicks(), 10, 35);
            if (ssj2_4 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(10.5)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0.2)
                    .setZ(1.2)
                    .animate('OutElastic', ssj2_4);

                builder.get('chest')
                    .setY(0.1)
                    .setZ(1.6)
                    .setXRotDegrees(-6)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutElastic', ssj2_4);

                builder.get('right_arm')
                    .setXRotDegrees(-123)
                    .setYRotDegrees(18)
                    .setZRotDegrees(8)
                    .setX(-4)
                    .setY(7)
                    .setZ(0.9)
                    .animate('OutElastic', ssj2_4);

                builder.get('left_arm')
                    .setXRotDegrees(-127)
                    .setYRotDegrees(-21)
                    .setZRotDegrees(-7)
                    .setX(4)
                    .setY(7)
                    .setZ(0.9)
                    .animate('OutElastic', ssj2_4);

                builder.get('right_leg')
                    .setZRotDegrees(10)
                    .setY(11.5)
                    .animate('OutElastic', ssj2_4);

                builder.get('left_leg')
                    .setZRotDegrees(-10)
                    .setY(11.5)
                    .animate('OutElastic', ssj2_4);

            }
        });
});
//SSJ2 -> SSJ3
PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj3', 37, (builder) => {
            let ssj3 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj2', 'transform_abil', builder.getPartialTicks(), 1, 4);
            if (ssj3 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(38)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0.3)
                    .setZ(-1.3)
                    .animate('OutQuad', ssj3);

                builder.get('chest')
                    .setY(0)
                    .setZ(-1.2)
                    .setXRotDegrees(22.5)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssj3);

                builder.get('right_arm')
                    .setXRotDegrees(-117)
                    .setYRotDegrees(11)
                    .setZRotDegrees(-5)
                    .setX(-4)
                    .setY(3.7)
                    .setZ(0)
                    .animate('OutQuad', ssj3);

                builder.get('left_arm')
                    .setXRotDegrees(-118)
                    .setYRotDegrees(-8)
                    .setZRotDegrees(4)
                    .setX(4)
                    .setY(3.7)
                    .setZ(0)
                    .animate('OutQuad', ssj3);
                    
                builder.get('right_leg')
                    .setZRotDegrees(5)
                    .setX(-2.4)
                    .setZ(1)
                    .animate('OutQuad', ssj3);

                builder.get('left_leg')
                    .setZRotDegrees(-5)
                    .setX(2.4)
                    .setZ(1)
                    .animate('OutQuad', ssj3);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj3_2', 37, (builder) => {
            let ssj3_2 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj2', 'transform_abil', builder.getPartialTicks(), 4, 16);
            if (ssj3_2 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(40)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0.5)
                    .setZ(-1.3)
                    .animate('OutQuad', ssj3_2);

                builder.get('chest')
                    .setY(0.1)
                    .setZ(-1.2)
                    .setXRotDegrees(20.5)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssj3_2);

                builder.get('right_arm')
                    .setXRotDegrees(-118)
                    .setYRotDegrees(13)
                    .setZRotDegrees(-6)
                    .setX(-4)
                    .setY(5)
                    .setZ(0)
                    .animate('OutQuad', ssj3_2);

                builder.get('left_arm')
                    .setXRotDegrees(-118)
                    .setYRotDegrees(-10)
                    .setZRotDegrees(5)
                    .setX(4)
                    .setY(5)
                    .setZ(0)
                    .animate('OutQuad', ssj3_2);

                builder.get('right_leg')
                    .setZRotDegrees(5)
                    .setX(-2.5)
                    .animate('OutQuad', ssj3_2);

                builder.get('left_leg')
                    .setZRotDegrees(-5)
                    .setX(2.5)
                    .animate('OutQuad', ssj3_2);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj3_3', 37, (builder) => {
            let ssj3_3 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj2', 'transform_abil', builder.getPartialTicks(), 16, 37);
            if (ssj3_3 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(88)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(1.4)
                    .setZ(-3.14)
                    .animate('OutExpo', ssj3_3);

                builder.get('chest')
                    .setY(0.42)
                    .setZ(-3.5)
                    .setXRotDegrees(41)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutExpo', ssj3_3);

                builder.get('right_arm')
                    .setXRotDegrees(-152.5)
                    .setYRotDegrees(1.96)
                    .setZRotDegrees(-9)
                    .setX(-4)
                    .setY(4.19)
                    .setZ(-1.27)
                    .animate('OutExpo', ssj3_3);

                builder.get('left_arm')
                    .setXRotDegrees(-150.7)
                    .setYRotDegrees(2.45)
                    .setZRotDegrees(3)
                    .setX(4)
                    .setY(4.2)
                    .setZ(-1.27)
                    .animate('OutExpo', ssj3_3);

                builder.get('right_leg')
                    .setZRotDegrees(1.52)
                    .setX(-2.7)
                    .animate('OutExpo', ssj3_3);

                builder.get('left_leg')
                    .setZRotDegrees(1.52)
                    .setX(2.7)
                    .animate('OutExpo', ssj3_3);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj3_4', 25, (builder) => {
            let ssj3_4 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj2', 'transform_abil_2', builder.getPartialTicks(), 1, 25);
            if (ssj3_4 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(-36.5)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(-1)
                    .setZ(1.6)
                    .animate('OutExpo', ssj3_4);

                builder.get('chest')
                    .setY(-0.4)
                    .setZ(2.4)
                    .setXRotDegrees(-12)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutExpo', ssj3_4);

                builder.get('right_arm')
                    .setXRotDegrees(-61)
                    .setYRotDegrees(29)
                    .setZRotDegrees(-2)
                    .setX(-4)
                    .setY(3.7)
                    .setZ(2)
                    .animate('OutExpo', ssj3_4);

                builder.get('left_arm')
                    .setXRotDegrees(-66)
                    .setYRotDegrees(-29)
                    .setZRotDegrees(8)
                    .setX(4)
                    .setY(3.7)
                    .setZ(2)
                    .animate('OutExpo', ssj3_4);

                builder.get('right_leg')
                    .setZRotDegrees(10.5)
                    .setX(-3.2)
                    .animate('OutExpo', ssj3_4);

                builder.get('left_leg')
                    .setZRotDegrees(-10.5)
                    .setX(3.2)
                    .animate('OutExpo', ssj3_4);

            }
        });
});
//SSJ3 -> SSj4
PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj4', 37, (builder) => {
            let ssj4 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj3', 'transform_abil', builder.getPartialTicks(), 1, 4);
            if (ssj4 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(38)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0.3)
                    .setZ(-1.3)
                    .animate('OutQuad', ssj4);

                builder.get('chest')
                    .setY(0)
                    .setZ(-1.2)
                    .setXRotDegrees(22.5)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssj4);

                builder.get('right_arm')
                    .setXRotDegrees(-117)
                    .setYRotDegrees(11)
                    .setZRotDegrees(-5)
                    .setX(-4)
                    .setY(3.7)
                    .setZ(0)
                    .animate('OutQuad', ssj4);

                builder.get('left_arm')
                    .setXRotDegrees(-118)
                    .setYRotDegrees(-8)
                    .setZRotDegrees(4)
                    .setX(4)
                    .setY(3.7)
                    .setZ(0)
                    .animate('OutQuad', ssj4);
                    
                builder.get('right_leg')
                    .setZRotDegrees(5)
                    .setX(-2.4)
                    .setZ(1)
                    .animate('OutQuad', ssj4);

                builder.get('left_leg')
                    .setZRotDegrees(-5)
                    .setX(2.4)
                    .setZ(1)
                    .animate('OutQuad', ssj4);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj4_2', 37, (builder) => {
            let ssj4_2 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj3', 'transform_abil', builder.getPartialTicks(), 4, 16);
            if (ssj4_2 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(40)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0.5)
                    .setZ(-1.3)
                    .animate('OutQuad', ssj4_2);

                builder.get('chest')
                    .setY(0.1)
                    .setZ(-1.2)
                    .setXRotDegrees(20.5)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssj4_2);

                builder.get('right_arm')
                    .setXRotDegrees(-118)
                    .setYRotDegrees(13)
                    .setZRotDegrees(-6)
                    .setX(-4)
                    .setY(5)
                    .setZ(0)
                    .animate('OutQuad', ssj4_2);

                builder.get('left_arm')
                    .setXRotDegrees(-118)
                    .setYRotDegrees(-10)
                    .setZRotDegrees(5)
                    .setX(4)
                    .setY(5)
                    .setZ(0)
                    .animate('OutQuad', ssj4_2);

                builder.get('right_leg')
                    .setZRotDegrees(5)
                    .setX(-2.5)
                    .animate('OutQuad', ssj4_2);

                builder.get('left_leg')
                    .setZRotDegrees(-5)
                    .setX(2.5)
                    .animate('OutQuad', ssj4_2);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj4_3', 37, (builder) => {
            let ssj4_3 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj3', 'transform_abil', builder.getPartialTicks(), 16, 37);
            if (ssj4_3 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(88)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(1.4)
                    .setZ(-3.14)
                    .animate('OutExpo', ssj4_3);

                builder.get('chest')
                    .setY(0.42)
                    .setZ(-3.5)
                    .setXRotDegrees(41)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutExpo', ssj4_3);

                builder.get('right_arm')
                    .setXRotDegrees(-152.5)
                    .setYRotDegrees(1.96)
                    .setZRotDegrees(-9)
                    .setX(-4)
                    .setY(4.19)
                    .setZ(-1.27)
                    .animate('OutExpo', ssj4_3);

                builder.get('left_arm')
                    .setXRotDegrees(-150.7)
                    .setYRotDegrees(2.45)
                    .setZRotDegrees(3)
                    .setX(4)
                    .setY(4.2)
                    .setZ(-1.27)
                    .animate('OutExpo', ssj4_3);

                builder.get('right_leg')
                    .setZRotDegrees(1.52)
                    .setX(-2.7)
                    .animate('OutExpo', ssj4_3);

                builder.get('left_leg')
                    .setZRotDegrees(1.52)
                    .setX(2.7)
                    .animate('OutExpo', ssj4_3);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssj4_4', 25, (builder) => {
            let ssj4_4 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj3', 'transform_abil_2', builder.getPartialTicks(), 1, 25);
            if (ssj4_4 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(-36.5)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(-1)
                    .setZ(1.6)
                    .animate('OutExpo', ssj4_4);

                builder.get('chest')
                    .setY(-0.4)
                    .setZ(2.4)
                    .setXRotDegrees(-12)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutExpo', ssj4_4);

                builder.get('right_arm')
                    .setXRotDegrees(-61)
                    .setYRotDegrees(29)
                    .setZRotDegrees(-2)
                    .setX(-4)
                    .setY(3.7)
                    .setZ(2)
                    .animate('OutExpo', ssj4_4);

                builder.get('left_arm')
                    .setXRotDegrees(-66)
                    .setYRotDegrees(-29)
                    .setZRotDegrees(8)
                    .setX(4)
                    .setY(3.7)
                    .setZ(2)
                    .animate('OutExpo', ssj4_4);

                builder.get('right_leg')
                    .setZRotDegrees(10.5)
                    .setX(-3.2)
                    .animate('OutExpo', ssj4_4);

                builder.get('left_leg')
                    .setZRotDegrees(-10.5)
                    .setX(3.2)
                    .animate('OutExpo', ssj4_4);

            }
        });
});
//SSJG -> SSJB
PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssjb1', 30, (builder) => {
            let ssjb1 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj_god', 'transform_abil', builder.getPartialTicks(), 1, 6);
            if (ssjb1 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(5.8)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0)
                    .setZ(1)
                    .animate('OutQuad', ssjb1);

                builder.get('chest')
                    .setY(0)
                    .setZ(1.2)
                    .setXRotDegrees(-5)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssjb1);

                builder.get('right_arm')
                    .setXRotDegrees(-139)
                    .setYRotDegrees(-55)
                    .setZRotDegrees(17)
                    .setX(-4)
                    .setY(-0.9)
                    .setZ(-2.1)
                    .animate('OutQuad', ssjb1);

                builder.get('left_arm')
                    .setXRotDegrees(-145)
                    .setYRotDegrees(44)
                    .setZRotDegrees(-27)
                    .setX(4)
                    .setY(-0.9)
                    .setZ(-2.1)
                    .animate('OutQuad', ssjb1);
                    
                builder.get('right_leg')
                    .setZRotDegrees(10)
                    .setX(-2)
                    .animate('OutQuad', ssjb1);

                builder.get('left_leg')
                    .setZRotDegrees(-10)
                    .setX(2)
                    .animate('OutQuad', ssjb1);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssjb1_2', 30, (builder) => {
            let ssjb1_2 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj_god', 'transform_abil', builder.getPartialTicks(), 6, 8);
            if (ssjb1_2 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(10.8)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0)
                    .setZ(1.3)
                    .animate('OutQuad', ssjb1_2);

                builder.get('chest')
                    .setY(0)
                    .setZ(2)
                    .setXRotDegrees(-10)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssjb1_2);

                builder.get('right_arm')
                    .setXRotDegrees(-143)
                    .setYRotDegrees(-55)
                    .setZRotDegrees(18)
                    .setX(-4)
                    .setY(-1.1)
                    .setZ(-1.7)
                    .animate('OutQuad', ssjb1_2);

                builder.get('left_arm')
                    .setXRotDegrees(-152)
                    .setYRotDegrees(44)
                    .setZRotDegrees(-27)
                    .setX(4)
                    .setY(-1.2)
                    .setZ(-1.7)
                    .animate('OutQuad', ssjb1_2);

                builder.get('right_leg')
                    .setZRotDegrees(10)
                    .animate('OutQuad', ssjb1_2);

                builder.get('left_leg')
                    .setZRotDegrees(-10)
                    .animate('OutQuad', ssjb1_2);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssjb1_3', 30, (builder) => {
            let ssjb1_3 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj_god', 'transform_abil', builder.getPartialTicks(), 8, 10);
            if (ssjb1_3 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(11.8)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0)
                    .setZ(1.5)
                    .animate('OutQuad', ssjb1_3);

                builder.get('chest')
                    .setY(0)
                    .setZ(2.2)
                    .setXRotDegrees(-11)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssjb1_3);

                builder.get('right_arm')
                    .setXRotDegrees(-145)
                    .setYRotDegrees(-55)
                    .setZRotDegrees(18)
                    .setX(-4)
                    .setY(-1.1)
                    .setZ(-1.7)
                    .animate('OutQuad', ssjb1_3);

                builder.get('left_arm')
                    .setXRotDegrees(-154)
                    .setYRotDegrees(44)
                    .setZRotDegrees(-27)
                    .setX(4)
                    .setY(-1.2)
                    .setZ(-1.7)
                    .animate('OutQuad', ssjb1_3);

                builder.get('right_leg')
                    .setZRotDegrees(10)
                    .animate('OutQuad', ssjb1_3);

                builder.get('left_leg')
                    .setZRotDegrees(-10)
                    .animate('OutQuad', ssjb1_3);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssjb1_4', 30, (builder) => {
            let ssjb1_4 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj_god', 'transform_abil', builder.getPartialTicks(), 10, 30);
            if (ssjb1_4 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(6)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(-0.6)
                    .setZ(1)
                    .animate('OutElastic', ssjb1_4);

                builder.get('chest')
                    .setY(-0.7)
                    .setZ(1.6)
                    .setXRotDegrees(-6)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutElastic', ssjb1_4);

                builder.get('right_arm')
                    .setXRotDegrees(-56)
                    .setYRotDegrees(18)
                    .setZRotDegrees(9)
                    .setX(-4)
                    .setY(4.1)
                    .setZ(2)
                    .animate('OutElastic', ssjb1_4);

                builder.get('left_arm')
                    .setXRotDegrees(-52)
                    .setYRotDegrees(-21)
                    .setZRotDegrees(-7)
                    .setX(4)
                    .setY(4.1)
                    .setZ(2)
                    .animate('OutElastic', ssjb1_4);

                builder.get('right_leg')
                    .setZRotDegrees(10)
                    .setY(11.5)
                    .animate('OutElastic', ssjb1_4);

                builder.get('left_leg')
                    .setZRotDegrees(-10)
                    .setY(11.5)
                    .animate('OutElastic', ssjb1_4);

            }
        });
});
//SSJB -> SSJB EVO
PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssjb2', 30, (builder) => {
            let ssjb2 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj_blue', 'transform_abil', builder.getPartialTicks(), 1, 6);
            if (ssjb2 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(5.8)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0)
                    .setZ(1)
                    .animate('OutQuad', ssjb2);

                builder.get('chest')
                    .setY(0)
                    .setZ(1.2)
                    .setXRotDegrees(-5)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssjb2);

                builder.get('right_arm')
                    .setXRotDegrees(-139)
                    .setYRotDegrees(-55)
                    .setZRotDegrees(17)
                    .setX(-4)
                    .setY(-0.9)
                    .setZ(-2.1)
                    .animate('OutQuad', ssjb2);

                builder.get('left_arm')
                    .setXRotDegrees(-145)
                    .setYRotDegrees(44)
                    .setZRotDegrees(-27)
                    .setX(4)
                    .setY(-0.9)
                    .setZ(-2.1)
                    .animate('OutQuad', ssjb2);
                    
                builder.get('right_leg')
                    .setZRotDegrees(10)
                    .setX(-2)
                    .animate('OutQuad', ssjb2);

                builder.get('left_leg')
                    .setZRotDegrees(-10)
                    .setX(2)
                    .animate('OutQuad', ssjb2);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssjb2_2', 30, (builder) => {
            let ssjb2_2 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj_blue', 'transform_abil', builder.getPartialTicks(), 6, 8);
            if (ssjb2_2 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(10.8)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0)
                    .setZ(1.3)
                    .animate('OutQuad', ssjb2_2);

                builder.get('chest')
                    .setY(0)
                    .setZ(2)
                    .setXRotDegrees(-10)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssjb2_2);

                builder.get('right_arm')
                    .setXRotDegrees(-143)
                    .setYRotDegrees(-55)
                    .setZRotDegrees(18)
                    .setX(-4)
                    .setY(-1.1)
                    .setZ(-1.7)
                    .animate('OutQuad', ssjb2_2);

                builder.get('left_arm')
                    .setXRotDegrees(-152)
                    .setYRotDegrees(44)
                    .setZRotDegrees(-27)
                    .setX(4)
                    .setY(-1.2)
                    .setZ(-1.7)
                    .animate('OutQuad', ssjb2_2);

                builder.get('right_leg')
                    .setZRotDegrees(10)
                    .animate('OutQuad', ssjb2_2);

                builder.get('left_leg')
                    .setZRotDegrees(-10)
                    .animate('OutQuad', ssjb2_2);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssjb2_3', 30, (builder) => {
            let ssjb2_3 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj_blue', 'transform_abil', builder.getPartialTicks(), 8, 10);
            if (ssjb2_3 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(11.8)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(0)
                    .setZ(1.5)
                    .animate('OutQuad', ssjb2_3);

                builder.get('chest')
                    .setY(0)
                    .setZ(2.2)
                    .setXRotDegrees(-11)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutQuad', ssjb2_3);

                builder.get('right_arm')
                    .setXRotDegrees(-145)
                    .setYRotDegrees(-55)
                    .setZRotDegrees(18)
                    .setX(-4)
                    .setY(-1.1)
                    .setZ(-1.7)
                    .animate('OutQuad', ssjb2_3);

                builder.get('left_arm')
                    .setXRotDegrees(-154)
                    .setYRotDegrees(44)
                    .setZRotDegrees(-27)
                    .setX(4)
                    .setY(-1.2)
                    .setZ(-1.7)
                    .animate('OutQuad', ssjb2_3);

                builder.get('right_leg')
                    .setZRotDegrees(10)
                    .animate('OutQuad', ssjb2_3);

                builder.get('left_leg')
                    .setZRotDegrees(-10)
                    .animate('OutQuad', ssjb2_3);

            }
        });
});

PalladiumEvents.registerAnimations((event) => {
        event.register('saiyan/ssjb2_4', 30, (builder) => {
            let ssjb2_4 = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(), 'saiyan:ssj_blue', 'transform_abil', builder.getPartialTicks(), 10, 30);
            if (ssjb2_4 > 0 && !builder.isFirstPerson()) {
                builder.get('head')
                    .setXRotDegrees(6)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .setX(0)
                    .setY(-0.6)
                    .setZ(1)
                    .animate('OutElastic', ssjb2_4);

                builder.get('chest')
                    .setY(-0.7)
                    .setZ(1.6)
                    .setXRotDegrees(-6)
                    .setYRotDegrees(0)
                    .setZRotDegrees(0)
                    .animate('OutElastic', ssjb2_4);

                builder.get('right_arm')
                    .setXRotDegrees(-56)
                    .setYRotDegrees(18)
                    .setZRotDegrees(9)
                    .setX(-4)
                    .setY(4.1)
                    .setZ(2)
                    .animate('OutElastic', ssjb2_4);

                builder.get('left_arm')
                    .setXRotDegrees(-52)
                    .setYRotDegrees(-21)
                    .setZRotDegrees(-7)
                    .setX(4)
                    .setY(4.1)
                    .setZ(2)
                    .animate('OutElastic', ssjb2_4);

                builder.get('right_leg')
                    .setZRotDegrees(10)
                    .setY(11.5)
                    .animate('OutElastic', ssjb2_4);

                builder.get('left_leg')
                    .setZRotDegrees(-10)
                    .setY(11.5)
                    .animate('OutElastic', ssjb2_4);

            }
        });
});
