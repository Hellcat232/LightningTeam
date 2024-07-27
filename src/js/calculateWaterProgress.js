export const calculateWaterProgress = (waterRecords, targetWater) => {
  const totalWater = waterRecords.reduce(
    (total, record) => total + record.waterValue,
    0
  );
  targetWater *= 1000;
  return Math.floor((totalWater / targetWater) * 100);
};
