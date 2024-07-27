export const calculateWaterProgress = (waterRecords, targetWater) => {
  const totalWater = waterRecords.reduce(
    (total, record) => total + record.waterValue,
    0
  );
  targetWater *= 1000;

  let calculate = Math.floor((totalWater / targetWater) * 100);

  if (calculate > 100) {
    calculate = 100;
  }

  return calculate;
};
