// Test state management utility functions

export interface TestResult {
  testId: string;
  result: any;
  completedAt: string;
}

export function saveTestResult(testId: string, result: any): void {
  try {
    // Mark test as completed in progress
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    progress[testId] = true;
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    // Store result for comprehensive summary
    const results: TestResult[] = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
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
    localStorage.setItem('psychTestResults', JSON.stringify(results));
  } catch (error) {
    console.warn('Error saving test result:', error);
  }
}

export function isTestCompleted(testId: string): boolean {
  try {
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    return Boolean(progress[testId]);
  } catch (error) {
    return false;
  }
}

export function clearTestState(testId: string): void {
  try {
    // Clear test-specific state
    localStorage.removeItem(`${testId}State`);
    localStorage.removeItem(`${testId}Result`);
    
    // Remove from progress
    const progress = JSON.parse(localStorage.getItem('psychTestProgress') || '{}');
    delete progress[testId];
    localStorage.setItem('psychTestProgress', JSON.stringify(progress));
    
    // Remove from results
    const results: TestResult[] = JSON.parse(localStorage.getItem('psychTestResults') || '[]');
    const filteredResults = results.filter(r => r.testId !== testId);
    localStorage.setItem('psychTestResults', JSON.stringify(filteredResults));
  } catch (error) {
    console.warn('Error clearing test state:', error);
  }
}

export function getTestState(testId: string): any {
  try {
    const saved = localStorage.getItem(`${testId}State`);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.warn('Error loading test state:', error);
    return null;
  }
}

export function saveTestState(testId: string, state: any): void {
  try {
    localStorage.setItem(`${testId}State`, JSON.stringify(state));
  } catch (error) {
    console.warn('Error saving test state:', error);
  }
}