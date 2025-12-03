# Part 1: Non-Ideal Sampling Reconstruction - Code Walkthrough

This document provides a detailed, line-by-line explanation of the MATLAB code used in Part 1 of the Signal Processing project.

## 1. Main Script: `part1_main.m`

This script serves as the entry point and orchestrator for Part 1.

```matlab
clear all; close all; clc;
```
*   **`clear all`**: Removes all variables from the workspace to ensure a clean start.
*   **`close all`**: Closes all open figure windows.
*   **`clc`**: Clears the command window text.

```matlab
fprintf('========================================\n');
...
fprintf('========================================\n\n');
```
*   **`fprintf`**: Prints the header and title to the console for user feedback.

### Step 1: Generate Test Signals
```matlab
[signals, t, fs, signal_names] = part1_generate_signals();
```
*   Calls the helper function `part1_generate_signals` to create the test data.
*   **Returns**:
    *   `signals`: A cell array containing the 3 test signals.
    *   `t`: The time vector.
    *   `fs`: Sampling frequency (1000 Hz).
    *   `signal_names`: Descriptive names for plots.

### Step 2: Scenario A (Time Jitter)
```matlab
K_values = [1, 2, 3, 4];
[mse_a, reconstructed_a] = part1_scenario_a(signals, t, fs, K_values);
```
*   **`K_values`**: Defines the different levels of jitter to test. $K=1$ means jitter is within $\pm 10\%$ of the sampling period.
*   **`part1_scenario_a`**: Runs the simulation for jittered sampling. Returns the Mean Squared Error (MSE) and the reconstructed signals.

### Step 3: Scenario B (Missing Samples)
```matlab
p_values = [0.01, 0.02, 0.03, 0.05, 0.07, 0.1];
[mse_b, reconstructed_b] = part1_scenario_b(signals, t, fs, p_values);
```
*   **`p_values`**: Defines the probabilities of missing a sample (1% to 10%).
*   **`part1_scenario_b`**: Runs the simulation for missing samples using iterative reconstruction.

### Step 4: Reporting
The rest of the script uses `fprintf` loops to print a formatted table of the MSE results for both scenarios and saves the workspace to `part1_results.mat`.

---

## 2. Signal Generation: `part1_generate_signals.m`

Creates the ground truth signals.

```matlab
fs = 1000;              % Sampling frequency (Hz)
T = 2;                  % Duration (seconds)
t = 0:1/fs:T-1/fs;      % Time vector
```
*   Sets up the time grid. 2 seconds at 1000 Hz gives 2000 samples.

### Signal 1: Single Sinusoid
```matlab
f1 = 50;
signals{1} = sin(2*pi*f1*t);
```
*   Generates a pure 50 Hz sine wave. Simple baseline.

### Signal 2: Multi-tone
```matlab
f2 = [30, 75, 120, 200];
...
for i = 1:length(f2)
    signals{2} = signals{2} + A2(i) * sin(2*pi*f2(i)*t);
end
```
*   Sums four sine waves with different frequencies and amplitudes. Tests the algorithm's ability to handle multiple frequency components.

### Signal 3: Band-limited Noise
```matlab
noise = randn(size(t));
b = fir1(filter_order, fc/(fs/2), 'low');
signals{3} = filtfilt(b, 1, noise);
```
*   **`randn`**: Generates white Gaussian noise (contains all frequencies).
*   **`fir1`**: Designs a Low-Pass Filter with cutoff `fc = 250` Hz.
*   **`filtfilt`**: Applies the filter to the noise. This creates a random signal that strictly adheres to the band-limit (no content above 250 Hz), satisfying the Nyquist criterion ($f_s/2 = 500 > 250$).

---

## 3. Scenario A: `part1_scenario_a.m`

Simulates sampling with timing jitter.

```matlab
Ts = 1/fs;
Delta = Ts/10;
```
*   **`Delta`**: Defines the "step size" of the jitter. Here it is 1/10th of a sample period.

### The Simulation Loop
```matlab
kn = randi([-K, K], 1, n_samples);
```
*   Generates a random integer $k_n$ between $-K$ and $+K$ for every sample.

```matlab
t_jittered = t + kn * Delta;
```
*   Calculates the **actual** time each sample is taken.
    *   Ideal: $0, T_s, 2T_s...$
    *   Jittered: $0+\delta_0, T_s+\delta_1, 2T_s+\delta_2...$

```matlab
x_jittered = interp1(t, x_true, t_jittered, 'spline', 'extrap');
```
*   Simulates the sampling process. We evaluate the continuous signal `x_true` at the irregular `t_jittered` times.

```matlab
x_reconstructed = sinc_interpolation(x_jittered, t_jittered, t, Ts);
```
*   **Crucial Step**: We call our custom reconstruction function. We pass it the *irregular* samples and their *exact* irregular times.

```matlab
recon_error = x_true - x_reconstructed;
plot(t, recon_error, 'w-', 'LineWidth', 1);
```
*   Calculates the error. Note the use of `'w-'` (white line) to ensure visibility on dark plots.

---

## 4. Scenario B: `part1_scenario_b.m`

Simulates missing samples (random dropouts).

```matlab
missing_mask = rand(1, n_samples) < p;
```
*   Creates a logical array (True/False). Each sample has probability `p` of being True (missing).

```matlab
x_with_missing(missing_mask) = 0;
```
*   Sets the missing values to 0. These are just placeholders; the algorithm knows they are missing.

### Iterative Reconstruction
Standard sinc interpolation fails with gaps. We use an iterative approach.

```matlab
x_reconstructed(missing_idx) = interp1(..., 'linear', ...);
```
*   **Initialization**: Fills the gaps with simple linear interpolation (drawing straight lines) to get a starting guess.

```matlab
for iter = 1:max_iterations
```
*   Loops 10 times to refine the guess.

```matlab
x_new = sinc_interpolation(sample_values, sample_times, t_target, Ts);
```
*   Uses the *current best guess* of the full signal to estimate the value at the missing point using the band-limited assumption (sinc).

```matlab
x_reconstructed(available_mask) = x_with_missing(available_mask);
```
*   **Constraint**: Resets the *known* samples back to their true measured values. We only want to update the *missing* ones.

---

## 5. Helper: `sinc_interpolation.m`

The core mathematical engine.

```matlab
function x_reconstructed = sinc_interpolation(sample_values, sample_times, target_times, Ts)
```

```matlab
for i = 1:N_target
    t_target = target_times(i);
```
*   Loops through every point we want to reconstruct.

```matlab
[~, sorted_idx] = sort(abs(sample_times - t_target));
neighbor_idx = sorted_idx(1:20);
```
*   **Optimization**: Finds the 20 closest samples to the target time. Sinc function decays quickly, so samples far away don't matter much.

```matlab
tau = (t_target - sample_times(j)) / Ts;
```
*   Calculates the normalized time distance between the target and the sample.

```matlab
sinc_val = sin(pi * tau) / (pi * tau);
```
*   Computes the sinc weight. Ideally `sinc(tau)`.

```matlab
x_reconstructed(i) = x_reconstructed(i) + sample_values(j) * sinc_val;
```
*   **Accumulation**: The reconstructed value is the weighted sum of the neighbors.
    $$ x(t) \approx \sum x[n] \cdot \text{sinc}\left(\frac{t-t_n}{T_s}\right) $$
