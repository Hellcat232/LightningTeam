export const calculateWaterProgress = (waterRecords, targetWater) => {
  const totalWater = waterRecords.reduce(
    (total, record) => total + record.waterValue,
    0
  );
  targetWater *= 1000;
  return (totalWater / targetWater) * 100;
};
