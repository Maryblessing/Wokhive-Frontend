import React from 'react';

///////////////////////////
///////////////////////////
// Component Types(UI)

export type ButtonProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  hierarchy?: 'primary' | 'secondary' | 'tertiary' | 'link';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  destructive?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  width?: string;
  href?: string;
  spinnerColor?: string;
  spinnerSize?: number;
};

export type InputProps = {
  seeIcon?: boolean;
  size?: 'sm' | 'md';
  inputType?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  elementType?: 'input' | 'textarea';
  type?:
    | 'default'
    | 'iconLeading'
    | 'leadingDropdown'
    | 'trailingDropdown'
    | 'leadingText'
    | 'paymentMethod'
    | 'tags'
    | 'trailingButton';

  destructive?: boolean;
  state?: 'placeholder' | 'filled' | 'focused' | 'disabled';
  label?: string;
  hintText?: string;
  helpIcon?: React.ReactNode;
  icon?: React.ReactNode;
  dropdownOptions?: string[];
  leadingText?: string;
  trailingButton?: React.ReactNode;
  error?: boolean;
  width?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type SocialButtonProps = {
  platform?: 'google' | 'facebook' | 'apple' | 'twitter' | 'figma' | 'dribble';
  theme?: 'brand' | 'colorWithBrand' | 'color';
  supportingText?: boolean;
  width?: string;
  isLoading?: boolean;
  disabled?: boolean;
  spinnerColor?: string;
  spinnerSize?: number;
};

///////////////////////////
///////////////////////////
// Context Types

export type FreelancerOnboardingContextProps = {
  experienceLevel: string;

  servicesOffered: string[];
  spokenLanguages: {
    spokenLanguages: {
      language: string;
      proficiency: 'Basic' | 'Conversational' | 'Fluent' | null;
      // disabled: boolean;
      // proficiencyDisabled: boolean;
    }[];
  };
  setExperienceLevel: React.Dispatch<React.SetStateAction<typeof initialExperienceLevel>>;
  setServicesOffered: React.Dispatch<React.SetStateAction<typeof initialServicesOffered>>;
  setSpokenLanguages: React.Dispatch<React.SetStateAction<typeof initialSpokenLanguages>>;
};

export type StepsProps = {
  onComplete: (isComplete: boolean) => void;
};

export type ClientOnboardingContextProps = {
  personalInfo: {
    firstName: string;
    lastName: string;
    age: string;
    gender: string;
  };

  careerInfo: {
    occupation: string;
    address: string;
  };

  bankInfo: {
    bankName: string;
    accountNumber: string;
  };

  setPersonalInfo: React.Dispatch<React.SetStateAction<typeof initialPersonalInfo>>;
  setCareerInfo: React.Dispatch<React.SetStateAction<typeof initialCareerInfo>>;
  setBankInfo: React.Dispatch<React.SetStateAction<typeof initialBankInfo>>;
};
///////////////////////////
///////////////////////////
// Freelancer Types

export type OnboardingStartScreenProps = {
  onStart: () => void;
};

export type Language = {
  name: string;
  proficiency: 'Basic' | 'Conversational' | 'Fluent' | null;
  disabled: boolean;
  proficiencyDisabled: boolean;
};
