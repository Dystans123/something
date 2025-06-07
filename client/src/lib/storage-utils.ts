// Utility functions for safe localStorage operations

export interface TestResult {
  testId: string;
  result: any;
  completedAt: string;
}

export interface TestProgress {
  shadowTest?: boolean;
  toxicityCompass?: boolean;
  relationshipPatterns?: boolean;
  integrationGuide?: boolean;
  intelligenceMap?: boolean;
  attachmentStyle?: boolean;
  identityCompass?: boolean;
  innerDriver?: boolean;
}

/**
 * Safely get and parse JSON from localStorage
 */
export function safeGetLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    
    const parsed = JSON.parse(item);
    return parsed;
  } catch (error) {
    console.warn(`Error parsing localStorage key "${key}":`, error);
    return defaultValue;
  }
}

/**
 * Safely set JSON data to localStorage
 */
export function safeSetLocalStorage(key: string, value: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error setting localStorage key "${key}":`, error);
  }
}

/**
 * Get test results with validation
 */
export function getTestResults(): TestResult[] {
  const results = safeGetLocalStorage<TestResult[]>('psychTestResults', []);
  
  // Validate that it's an array and all items have required properties
  if (!Array.isArray(results)) {
    console.warn('Test results is not an array, resetting');
    return [];
  }
  
  return results.filter(result => 
    result && 
    typeof result === 'object' && 
    result.testId && 
    result.result && 
    result.completedAt
  );
}

/**
 * Get test progress with validation
 */
export function getTestProgress(): TestProgress {
  const progress = safeGetLocalStorage<TestProgress>('psychTestProgress', {});
  
  // Validate that it's an object
  if (typeof progress !== 'object' || progress === null) {
    console.warn('Test progress is not an object, resetting');
    return {};
  }
  
  return progress;
}

/**
 * Update test progress for a specific test
 */
export function updateTestProgress(testId: string, completed: boolean): void {
  const progress = getTestProgress();
  const progressKey = testId.replace('-', '').replace('test', 'Test').replace('compass', 'Compass').replace('patterns', 'Patterns').replace('guide', 'Guide').replace('map', 'Map').replace('style', 'Style').replace('driver', 'Driver');
  
  // Map test IDs to progress keys
  const keyMap: Record<string, keyof TestProgress> = {
    'shadow-test': 'shadowTest',
    'toxicity-compass': 'toxicityCompass',
    'relationship-patterns': 'relationshipPatterns',
    'integration-guide': 'integrationGuide',
    'intelligence-map': 'intelligenceMap',
    'attachment-style': 'attachmentStyle',
    'identity-compass': 'identityCompass',
    'inner-driver': 'innerDriver'
  };
  
  const key = keyMap[testId];
  if (key) {
    progress[key] = completed;
    safeSetLocalStorage('psychTestProgress', progress);
  }
}

/**
 * Save test result
 */
export function saveTestResult(testId: string, result: any): void {
  const results = getTestResults();
  const existingIndex = results.findIndex(r => r.testId === testId);
  
  const newResult: TestResult = {
    testId,
    result,
    completedAt: new Date().toISOString()
  };
  
  if (existingIndex >= 0) {
    results[existingIndex] = newResult;
  } else {
    results.push(newResult);
  }
  
  safeSetLocalStorage('psychTestResults', results);
  updateTestProgress(testId, true);
}

/**
 * Clear all test data
 */
export function clearAllTestData(): void {
  localStorage.removeItem('psychTestResults');
  localStorage.removeItem('psychTestProgress');
  localStorage.removeItem('currentJourneyType');
  
  // Clear individual test state keys
  const testStateKeys = [
    'intelligenceMapState',
    'intelligenceMapResult',
    'attachmentStyleState',
    'attachmentStyleResult',
    'identityCompassState',
    'identityCompassResult',
    'innerDriverState',
    'innerDriverResult',
    'shadowTestState',
    'shadowTestResult',
    'toxicityCompassState',
    'toxicityCompassResult',
    'relationshipPatternsState',
    'relationshipPatternsResult',
    'integrationGuideState',
    'integrationGuideResult'
  ];
  
  testStateKeys.forEach(key => {
    localStorage.removeItem(key);
  });
}

/**
 * Validate localStorage data integrity and clear if corrupted
 */
export function validateAndCleanStorage(): void {
  try {
    const results = getTestResults();
    const progress = getTestProgress();
    
    // Check if data is consistent
    let needsClearing = false;
    
    // Check for orphaned progress entries
    Object.keys(progress).forEach(key => {
      if (typeof progress[key as keyof TestProgress] !== 'boolean') {
        needsClearing = true;
      }
    });
    
    // Check for malformed results
    results.forEach(result => {
      if (!result.testId || !result.result || !result.completedAt) {
        needsClearing = true;
      }
    });
    
    if (needsClearing) {
      console.warn('Corrupted localStorage data detected, clearing all test data');
      clearAllTestData();
    }
  } catch (error) {
    console.warn('Error validating localStorage, clearing all test data:', error);
    clearAllTestData();
  }
}