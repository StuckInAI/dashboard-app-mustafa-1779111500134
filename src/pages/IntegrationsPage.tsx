import { useState } from 'react';
import { Plug, Check, Settings as SettingsIcon } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

type Integration = {
  id: string;
  name: string;
  description: string;
  category: string;
  connected: boolean;
};

const INITIAL_INTEGRATIONS: Integration[] = [
  {
    id: 'gmail',
    name: 'Gmail',
    description: 'Send and track candidate emails directly from HireFlow.',
    category: 'Google Workspace',
    connected: true,
  },
  {
    id: 'gcal',
    name: 'Google Calendar',
    description: 'Schedule interviews and sync availability.',
    category: 'Google Workspace',
    connected: true,
  },
  {
    id: 'gdrive',
    name: 'Google Drive',
    description: 'Store resumes, portfolios, and offer letters.',
    category: 'Google Workspace',
    connected: false,
  },
  {
    id: 'gmeet',
    name: 'Google Meet',
    description: 'Auto-create video interview links.',
    category: 'Google Workspace',
    connected: true,
  },
  {
    id: 'openai',
    name: 'OpenAI',
    description: 'AI-assisted job descriptions and resume screening.',
    category: 'AI Services',
    connected: false,
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude',
    description: 'Generate candidate summaries and interview questions.',
    category: 'AI Services',
    connected: false,
  },
];

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState<Integration[]>(INITIAL_INTEGRATIONS);

  const toggle = (id: string) => {
    setIntegrations((prev) =>
      prev.map((i) => (i.id === id ? { ...i, connected: !i.connected } : i))
    );
  };

  const categories = Array.from(new Set(integrations.map((i) => i.category)));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      {categories.map((cat) => (
        <Card key={cat} title={cat} subtitle="Connect tools to streamline your workflow.">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 'var(--space-4)',
            }}
          >
            {integrations
              .filter((i) => i.category === cat)
              .map((i) => (
                <div
                  key={i.id}
                  style={{
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-4)',
                    background: 'var(--color-bg-secondary)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--color-bg-hover)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-accent-blue)',
                      }}
                    >
                      <Plug size={18} />
                    </div>
                    {i.connected ? (
                      <Badge variant="success">Connected</Badge>
                    ) : (
                      <Badge variant="neutral">Not connected</Badge>
                    )}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: 'var(--font-size-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 4,
                      }}
                    >
                      {i.name}
                    </h3>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                      {i.description}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'auto' }}>
                    <button
                      onClick={() => toggle(i.id)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: 'var(--font-weight-medium)',
                        background: i.connected ? 'var(--color-bg-hover)' : 'var(--gradient-blue)',
                        color: i.connected ? 'var(--color-text-primary)' : 'white',
                        border: i.connected ? '1px solid var(--color-border)' : 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                      }}
                    >
                      {i.connected ? (
                        <>
                          <Check size={14} /> Disconnect
                        </>
                      ) : (
                        'Connect'
                      )}
                    </button>
                    {i.connected && (
                      <button
                        style={{
                          width: 36,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--color-bg-hover)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-secondary)',
                        }}
                        title="Configure"
                      >
                        <SettingsIcon size={16} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
