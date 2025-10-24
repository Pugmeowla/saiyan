// ==========================
// Base Saiyan charge powers
// ==========================
let powers = [
  'saiyan:saiyan',
  'saiyan:ssj1-g1',
  'saiyan:ssj2',
  'saiyan:ssj3',
  'saiyan:ssj1-g4',
  'saiyan:ssj_god',
  'saiyan:ui_sign',
  'saiyan:ui_perfect',
  'saiyan:ssj_blue',
  'saiyan:ssj_blue_evo',
  'saiyan:ssj4',
  'saiyan:ue'
];

var getAnyChargeValue = function (builder, start, end) {
  let player = builder.getPlayer();
  for (let power of powers) {
    let value = animationUtil.getAnimationTimerAbilityValue(
      player, power, 'charge_abil', builder.getPartialTicks(), start, end
    );
    if (value > 0) return value;
  }
  return 0;
};

PalladiumEvents.registerAnimations((event) => {
  // charge1
  event.register('saiyan/charge1', 20, (builder) => {
    let charge1 = getAnyChargeValue(builder, 1, 6);
    if (charge1 > 0 && !builder.isFirstPerson()) {
      builder.get('head')
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .setXRotDegrees(0)
        .setX(0)
        .setY(0)
        .setZ(1)
        .animate('OutQuad', charge1);
      builder.get('chest')
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .setX(0)
        .setY(0)
        .setZ(1.2)
        .setXRotDegrees(-5)
        .animate('OutQuad', charge1);
      builder.get('right_arm')
        .setXRotDegrees(-139)
        .setYRotDegrees(-55)
        .setZRotDegrees(17)
        .setX(-4)
        .setY(-0.9)
        .setZ(-2.1)
        .animate('OutQuad', charge1);
      builder.get('left_arm')
        .setXRotDegrees(-145)
        .setYRotDegrees(44)
        .setZRotDegrees(-27)
        .setX(4)
        .setY(-0.9)
        .setZ(-2.1)
        .animate('OutQuad', charge1);
    }
  });

  // charge2
  event.register('saiyan/charge2', 20, (builder) => {
    let charge2 = getAnyChargeValue(builder, 6, 8);
    if (charge2 > 0 && !builder.isFirstPerson()) {
      builder.get('head')
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .setXRotDegrees(0)
        .setX(0)
        .setY(0)
        .setZ(1.3)
        .animate('OutQuad', charge2);
      builder.get('chest')
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .setX(0)
        .setY(0)
        .setZ(2)
        .setXRotDegrees(-10)
        .animate('OutQuad', charge2);
      builder.get('right_arm')
        .setXRotDegrees(-143)
        .setYRotDegrees(-55)
        .setZRotDegrees(18)
        .setX(-4)
        .setY(-1.1)
        .setZ(-1.7)
        .animate('OutQuad', charge2);
      builder.get('left_arm')
        .setXRotDegrees(-152)
        .setYRotDegrees(44)
        .setZRotDegrees(-27)
        .setX(4)
        .setY(-1.2)
        .setZ(-1.7)
        .animate('OutQuad', charge2);
    }
  });

  // charge3
  event.register('saiyan/charge3', 20, (builder) => {
    let charge3 = getAnyChargeValue(builder, 8, 10);
    if (charge3 > 0 && !builder.isFirstPerson()) {
      builder.get('head')
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .setXRotDegrees(0)
        .setX(0)
        .setY(0)
        .setZ(1.5)
        .animate('OutQuad', charge3);
      builder.get('chest')
        .setZ(2.2)
        .setX(0)
        .setY(0)
        .setXRotDegrees(-11)
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .animate('OutQuad', charge3);
      builder.get('right_arm')
        .setXRotDegrees(-145)
        .setYRotDegrees(-55)
        .setZRotDegrees(18)
        .setX(-4)
        .setY(-1.1)
        .setZ(-1.7)
        .animate('OutQuad', charge3);
      builder.get('left_arm')
        .setXRotDegrees(-154)
        .setYRotDegrees(44)
        .setZRotDegrees(-27)
        .setX(4)
        .setY(-1.2)
        .setZ(-1.7)
        .animate('OutQuad', charge3);
    }
  });

  // charge4
  event.register('saiyan/charge4', 20, (builder) => {
    let charge4 = getAnyChargeValue(builder, 10, 20);
    if (charge4 > 0 && !builder.isFirstPerson()) {
      builder.get('head')
        .setXRotDegrees(0)
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .setY(-0.6)
        .setX(0)
        .setZ(1)
        .animate('OutBack', charge4);
      builder.get('chest')
        .setY(-0.7)
        .setZ(1.6)
        .setXRotDegrees(-6)
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .animate('OutBack', charge4);
      builder.get('right_arm')
        .setXRotDegrees(-56)
        .setYRotDegrees(18)
        .setZRotDegrees(9)
        .setX(-4)
        .setY(4.1)
        .setZ(2)
        .animate('OutBack', charge4);
      builder.get('left_arm')
        .setXRotDegrees(-52)
        .setYRotDegrees(-21)
        .setZRotDegrees(-7)
        .setX(4)
        .setY(4.1)
        .setZ(2)
        .animate('OutBack', charge4);
    }
  });
});


// ==========================
// SSJ1-G2 and SSJ1-G3 charges
// ==========================
let powers_2 = [
  'saiyan:ssj1-g2',
  'saiyan:ssj1-g3'
];

var getAnyChargeValue_2 = function (builder, start, end) {
  let player = builder.getPlayer();
  for (let power of powers_2) {
    let value = animationUtil.getAnimationTimerAbilityValue(
      player, power, 'charge_abil', builder.getPartialTicks(), start, end
    );
    if (value > 0) return value;
  }
  return 0;
};

PalladiumEvents.registerAnimations((event) => {
  // charge1_2
  event.register('saiyan/charge1_2', 20, (builder) => {
    let charge1 = getAnyChargeValue_2(builder, 1, 6);
    if (charge1 > 0 && !builder.isFirstPerson()) {
      builder.get('head')
        .setXRotDegrees(5.8)
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .setZ(1)
        .setX(0)
        .setY(0)
        .animate('OutQuad', charge1);
      builder.get('chest')
        .setZ(1.2)
        .setXRotDegrees(-5)
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .animate('OutQuad', charge1);
      builder.get('right_arm')
        .setXRotDegrees(-139)
        .setYRotDegrees(-55)
        .setZRotDegrees(17)
        .setX(-4)
        .setY(-0.9)
        .setZ(-2.1)
        .animate('OutQuad', charge1);
      builder.get('left_arm')
        .setXRotDegrees(-145)
        .setYRotDegrees(44)
        .setZRotDegrees(-27)
        .setX(4)
        .setY(-0.9)
        .setZ(-2.1)
        .animate('OutQuad', charge1);
    }
  });

  // charge2_2
  event.register('saiyan/charge2_2', 20, (builder) => {
    let charge2 = getAnyChargeValue_2(builder, 6, 8);
    if (charge2 > 0 && !builder.isFirstPerson()) {
      builder.get('head')
        .setXRotDegrees(10.8)
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .setZ(1.3)
        .setX(0)
        .setY(0)
        .animate('OutQuad', charge2);
      builder.get('chest')
        .setZ(2)
        .setXRotDegrees(-10)
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .animate('OutQuad', charge2);
      builder.get('right_arm')
        .setXRotDegrees(-143)
        .setYRotDegrees(-55)
        .setZRotDegrees(18)
        .setX(-4)
        .setY(-1.1)
        .setZ(-1.7)
        .animate('OutQuad', charge2);
      builder.get('left_arm')
        .setXRotDegrees(-152)
        .setYRotDegrees(44)
        .setZRotDegrees(-27)
        .setX(4)
        .setY(-1.2)
        .setZ(-1.7)
        .animate('OutQuad', charge2);
    }
  });

  // charge3_2
  event.register('saiyan/charge3_2', 20, (builder) => {
    let charge3 = getAnyChargeValue_2(builder, 8, 10);
    if (charge3 > 0 && !builder.isFirstPerson()) {
      builder.get('head')
        .setXRotDegrees(11.8)
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .setZ(1.5)
        .setX(0)
        .setY(0)
        .animate('OutQuad', charge3);
      builder.get('chest')
        .setZ(2.2)
        .setXRotDegrees(-11)
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .animate('OutQuad', charge3);
      builder.get('right_arm')
        .setXRotDegrees(-145)
        .setYRotDegrees(-55)
        .setZRotDegrees(18)
        .setX(-4)
        .setY(-1.1)
        .setZ(-1.7)
        .animate('OutQuad', charge3);
      builder.get('left_arm')
        .setXRotDegrees(-154)
        .setYRotDegrees(44)
        .setZRotDegrees(-27)
        .setX(4)
        .setY(-1.2)
        .setZ(-1.7)
        .animate('OutQuad', charge3);
    }
  });

  // charge4_2
  event.register('saiyan/charge4_2', 20, (builder) => {
    let charge4 = getAnyChargeValue_2(builder, 10, 20);
    if (charge4 > 0 && !builder.isFirstPerson()) {
      builder.get('head')
        .setXRotDegrees(6)
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .setY(-0.6)
        .setZ(1)
        .setX(0)
        .animate('OutBack', charge4);
      builder.get('chest')
        .setY(-0.7)
        .setZ(1.6)
        .setX(0)
        .setXRotDegrees(-6)
        .setYRotDegrees(0)
        .setZRotDegrees(0)
        .animate('OutBack', charge4);
      builder.get('right_arm')
        .setXRotDegrees(-56)
        .setYRotDegrees(18)
        .setZRotDegrees(9)
        .setX(-4)
        .setY(4.1)
        .setZ(2)
        .animate('OutBack', charge4);
      builder.get('left_arm')
        .setXRotDegrees(-52)
        .setYRotDegrees(-21)
        .setZRotDegrees(-7)
        .setX(4)
        .setY(4.1)
        .setZ(2)
        .animate('OutBack', charge4);
    }
  });
});
